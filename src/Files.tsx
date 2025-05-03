import { createResource, For } from "solid-js";
import { readDir } from "@tauri-apps/plugin-fs";
import { BaseDirectory } from "@tauri-apps/api/path";

async function getDataDir() {
  return await readDir("storage", { baseDir: BaseDirectory.AppData });
}

function Files() {
  const [dataDirPath] = createResource(getDataDir);

  return (
    <For each={dataDirPath()}>
      {(file) => {
        console.log("test");
        return (
          <li>
            <p>{file.name}</p>
          </li>
        );
      }}
    </For>
  );
}

export default Files;
