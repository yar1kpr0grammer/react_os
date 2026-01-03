import { useEffect, useState } from "react";
import style from "./Clock.module.css";

export function Clock() {
	const [now, setNow] = useState(new Date());

	useEffect(() => {
		const timer = setInterval(() => {
			setNow(new Date());
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	const hours = now.getHours();
	const minutes = now.getMinutes();
	const date = new Intl.DateTimeFormat("ru-RU", {
		weekday: "short",
		day: "2-digit",
		month: "short",
	}).format(now);

	return (
		<div className={style.clock}>
			<div>{date}</div>
			<div>
				{hours}:{minutes}
			</div>
		</div>
	);
}
