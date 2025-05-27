/*	We want to:
 *      //TODO flesh out
 *		X 1. Programmatically check if the user has slippi installed and set the dolphin executable location (maybe read from slippi-launcher datastore?)
 *			a. see https://gemini.google.com/app/acb86efee2bdcb9a
 *			b. as a last resort -- ask user if they want to install or locate their own
 *			c. after this we should ask for replays folder
 *		X 2. Ask the user to select a default melee ISO -- grabbed from slippi settings
 *		  3. Ask if they have any other melee ISOs (and to select that folder) //TODO
 *		X 4. Finally -- set isCreated to true -- commented out for now.  will uncomment when tested
 */

import { createResource } from "solid-js";
import { findSlippiDetails } from "../utils/setupUtils";
import { LazyStore } from "@tauri-apps/plugin-store";

export default function Setup() {
  const initStore = new LazyStore("init.json");
  const [slippiDetails] = createResource(findSlippiDetails, {
    onHydrated: () => {
      initStore.set("dolphinPath", slippiDetails()!.dolphinPath);
      initStore.set("meleeIso", slippiDetails()!.meleeIso);
      // initStore.set("isCreated", true);
    },
  });

  return (
    <>
      <h1>SETUP</h1>
      {console.log(initStore.entries())}
      <span>{slippiDetails.loading && "Loading..."}</span>
      <p>Found executable at "{slippiDetails()?.dolphinPath}"</p>
      <p>Found melee iso at "{slippiDetails()?.meleeIso}"</p>
    </>
  );
}
