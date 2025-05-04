import { createSignal, Show } from "solid-js";
import "./App.css";
import SimpleOpener from "./SimpleOpener";
import FolderOpener from "./FolderSelector";

interface appProps {
  settings: {
    iso: string;
    isoFolder: string;
    slippiDirectory: string;
  };
}

function App(props: appProps) {
  const [selectedISO, setSelectedISO] = createSignal(
    props?.settings?.iso || "",
  );
  return (
    <main>
      <p>currently selected ISO:</p>
      <Show when={selectedISO()} fallback={<p>no iso selected!</p>}>
        <p>{selectedISO()}</p>
      </Show>
      <button>Select ISO</button>
      <FolderOpener />
      <SimpleOpener />
    </main>
  );
}

export default App;
