import { useWindowManager } from "../WindowManagerContext/WindowManagerContext";
import type { ReactNode } from "react";
import style from "./Dock.module.css";

type DockProps = {
	children: ReactNode;
};

type DockAppProps = {
	icon: string;
	title: string;
	window: ReactNode;
	id: string;
};

export function DockApp({ icon, title, window, id }: DockAppProps) {
	const { toggleWindow, isWindowOpen } = useWindowManager();

	const opened = isWindowOpen(id);

	return (
		<button
			className={`${style.app} ${opened ? style.active : ""}`}
			onClick={() => toggleWindow(id, window)}
		>
			<img src={icon} alt={title} />
		</button>
	);
}

export function Dock({ children }: DockProps) {
	return <div className={style.dock}>{children}</div>;
}
