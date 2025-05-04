import { open } from "@tauri-apps/plugin-dialog";
import { createSignal } from "solid-js";

function FolderOpener() {
  const [selectedFolder, setSelectedFolder] = createSignal<string | undefined>(
    undefined,
  );

  const pickFolder = async () => {
    const folderPath = await open({
      multiple: false,
      directory: true,
    });
    setSelectedFolder(folderPath as string | undefined);
  };

  return (
    <>
      <button onClick={pickFolder}>Select ISO Folder</button>
      {selectedFolder() && <p>Selected folder: {selectedFolder()}</p>}
    </>
  );
}

export default FolderOpener;
