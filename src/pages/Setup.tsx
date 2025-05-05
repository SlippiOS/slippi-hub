/*	We want to:
 *		1. Programmatically check if the user has slippi installed and set the dolphin executable location (maybe read from slippi-launcher datastore?)
 *			a. see https://gemini.google.com/app/acb86efee2bdcb9a
 *			b. as a last resort -- ask user if they want to install or locate their own
 *			c. after this we should ask for replays folder
 *		2. Ask the user to select a default melee ISO
 *		3. Ask if they have any other melee ISOs (and to select that folder)
 *		4. Finally -- set isCreated to true
 */

import { createResource } from "solid-js";
import { findSlippiDolphin } from "../utils/setupUtils";
import { LazyStore } from "@tauri-apps/plugin-store";

export default function Setup() {
  const initStore = new LazyStore("init.json");
  const [slippiExecutable] = createResource(findSlippiDolphin);

  return (
    <>
      <h1>SETUP</h1>
      <span>{slippiExecutable.loading && "Loading..."}</span>
    </>
  );
}
