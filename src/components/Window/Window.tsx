import type { ReactNode } from "react";
import style from "./Window.module.css";
import { useDraggable } from "@/hooks/useDraggable";

type WindowProps = {
	title?: string;
	children: ReactNode;
	initialPosition?: { x: number; y: number };
	draggable?: boolean;
	zIndex?: number;
};

export function Window({
	title = "Window",
	children,
	initialPosition,
	draggable = true,
	zIndex = 1,
}: WindowProps) {
	const { position, onMouseDown } = useDraggable({
		initialPosition,
		disabled: !draggable,
	});

	return (
		<div
			className={style.window}
			style={{
				left: position.x,
				top: position.y,
				zIndex,
			}}
		>
			<div className={style.title} onMouseDown={onMouseDown}>
				{title}
				<div>
					<button
						className={style.closeButton}
						onClick={() => alert("Будет потом")}
					>
						x
					</button>
				</div>
			</div>

			<div className={style.content}>{children}</div>
		</div>
	);
}
