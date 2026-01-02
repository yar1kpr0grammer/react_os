import { Header } from "./Header/Header";
import styles from "./index.module.css";

import { saveAsTxt } from "@/utils/save";
import { useState } from "react";
export default function Notepad() {
	const [text, setText] = useState("");

	return (
		<>
			<Header save={() => saveAsTxt(text, "text.txt")} />
			<main>
				<textarea
					className={styles.input}
					placeholder="..."
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
			</main>
		</>
	);
}
