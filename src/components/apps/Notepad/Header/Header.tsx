import styles from "./Header.module.css";

type HeaderProps = {
	save: () => void;
};

export function Header({ save }: HeaderProps) {
	return (
		<header className={styles.header}>
			<button onClick={save} className={styles.saveButton}>
				Save
			</button>
		</header>
	);
}
