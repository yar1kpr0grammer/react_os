import { useRef, useState, useEffect } from "react";
import type { MouseEvent as ReactMouseEvent } from "react";

type Position = { x: number; y: number };

type UseDraggableProps = {
	initialPosition?: Position;
	disabled?: boolean;
	onDragEnd?: (pos: Position) => void;
};

export function useDraggable({
	initialPosition = { x: 0, y: 0 },
	disabled = false,
	onDragEnd,
}: UseDraggableProps) {
	const [position, setPosition] = useState(initialPosition);
	const dragging = useRef(false);
	const offset = useRef({ x: 0, y: 0 });

	const onMouseDown = (e: ReactMouseEvent<HTMLDivElement>) => {
		if (disabled) return;

		dragging.current = true;
		offset.current = {
			x: e.clientX - position.x,
			y: e.clientY - position.y,
		};
	};

	useEffect(() => {
		const onMouseMove = (e: MouseEvent) => {
			if (!dragging.current) return;

			setPosition({
				x: e.clientX - offset.current.x,
				y: e.clientY - offset.current.y,
			});
		};

		const onMouseUp = () => {
			if (dragging.current) {
				dragging.current = false;
				onDragEnd?.(position);
			}
		};

		window.addEventListener("mousemove", onMouseMove);
		window.addEventListener("mouseup", onMouseUp);

		return () => {
			window.removeEventListener("mousemove", onMouseMove);
			window.removeEventListener("mouseup", onMouseUp);
		};
	}, [position, onDragEnd]);

	return {
		position,
		onMouseDown,
		setPosition,
	};
}
