import "./App.css";
import { Window } from "./components/Window/Window";
import { Dock, DockApp } from "./components/Dock/Dock";
import { Desktop } from "./components/Desktop/Desktop";
import { WindowManagerProvider } from "./components/WindowManagerContext/WindowManagerContext";
import Notepad from "./components/apps/Notepad";
import noteIcon from "@/assets/note.svg";

function App() {
	return (
		<WindowManagerProvider>
			<Desktop />

			<Dock>
				<DockApp
					id="terminal"
					title="Terminal"
					window={<Window title="Terminal">bash$</Window>}
				/>

				<DockApp
					id="files"
					title="Files"
					window={<Window title="Files">📁</Window>}
				/>

				<DockApp
					id="notepad"
					icon={noteIcon}
					title="Notepad"
					window={
						<Window title="Notepad">
							<Notepad />
						</Window>
					}
				/>
			</Dock>
		</WindowManagerProvider>
	);
}

export default App;
