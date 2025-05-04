import { open } from "@tauri-apps/plugin-dialog";
import { createRoot, createSignal } from "solid-js";

function createFolderPicker() {
  const [selectedFolder, setSelectedFolder] = createSignal();
  const pickFolder = async () => {
    const folderPath = await open({
      multiple: false,
      directory: true,
    });
    setSelectedFolder(folderPath as string | undefined);
  };
  return { selectedFolder, pickFolder };
}

export default createRoot(createFolderPicker);
