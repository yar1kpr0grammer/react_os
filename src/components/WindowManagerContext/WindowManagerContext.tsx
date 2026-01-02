import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type WindowData = {
	id: string;
	node: ReactNode;
};

type WindowManagerContextType = {
	openWindow: (id: string, node: ReactNode) => void;
	closeWindow: (id: string) => void;
	isWindowOpen: (id: string) => boolean;
	toggleWindow: (id: string, node: ReactNode) => void;
};

const WindowManagerContext = createContext<WindowManagerContextType | null>(
	null,
);

export function WindowManagerProvider({ children }: { children: ReactNode }) {
	const [windows, setWindows] = useState<WindowData[]>([]);

	const openWindow = (id: string, node: ReactNode) => {
		setWindows((prev) =>
			prev.some((w) => w.id === id) ? prev : [...prev, { id, node }],
		);
	};

	const closeWindow = (id: string) => {
		setWindows((prev) => prev.filter((w) => w.id !== id));
	};

	const isWindowOpen = (id: string) => {
		return windows.some((w) => w.id === id);
	};

	const toggleWindow = (id: string, node: ReactNode) => {
		setWindows((prev) =>
			prev.some((w) => w.id === id)
				? prev.filter((w) => w.id !== id)
				: [...prev, { id, node }],
		);
	};

	return (
		<WindowManagerContext.Provider
			value={{ openWindow, closeWindow, isWindowOpen, toggleWindow }}
		>
			{children}

			<div className="windows-layer">
				{windows.map((w) => (
					<div key={w.id}>{w.node}</div>
				))}
			</div>
		</WindowManagerContext.Provider>
	);
}

export const useWindowManager = () => {
	const ctx = useContext(WindowManagerContext);
	if (!ctx) throw new Error("useWindowManager must be used inside provider");
	return ctx;
};
