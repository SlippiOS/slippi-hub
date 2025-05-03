import { Command } from "@tauri-apps/plugin-shell";
import "./App.css";

async function play() {
  const command = Command.create("run-slippi");
  await command.execute();
}

function SimpleOpener() {
  return <button onClick={() => play()}>play</button>;
}

export default SimpleOpener;
