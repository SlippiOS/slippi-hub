import "./App.css";
import folderPicker from "./folderPicker";

interface appProps {
  settings: {
    iso: string;
    isoFolder: string;
    slippiDirectory: string;
  };
}

function App(props: appProps) {
  const { selectedFolder, pickFolder } = folderPicker;
  return (
    <main>
      <button onClick={pickFolder}>Pick Folder</button>
      {selectedFolder()}
    </main>
  );
}

export default App;
