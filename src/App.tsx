import "./App.css";
import { Window } from "./components/Window/Window";
import { Dock, DockApp } from "./components/Dock/Dock";
import { Desktop } from "./components/Desktop/Desktop";
import { WindowManagerProvider } from "./components/WindowManagerContext/WindowManagerContext";

import reactIcon from "./assets/react.svg";

function App() {
	return (
		<WindowManagerProvider>
			<Desktop />

			<Dock>
				<DockApp
					id="terminal"
					icon={reactIcon}
					title="Terminal"
					window={<Window title="Terminal">bash$</Window>}
				/>

				<DockApp
					id="files"
					icon={reactIcon}
					title="Files"
					window={<Window title="Files">📁</Window>}
				/>
			</Dock>
		</WindowManagerProvider>
	);
}

export default App;
