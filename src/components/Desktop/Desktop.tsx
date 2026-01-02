import type { ReactNode } from "react";
import style from "./Desktop.module.css";

type DesktopProps = {
	children?: ReactNode,
};

export function Desktop({ children }: DesktopProps) {
	return <div className={style.desktop}>{children}</div>;
}
