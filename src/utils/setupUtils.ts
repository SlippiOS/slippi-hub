import { useNavigate } from "@solidjs/router";
import { BaseDirectory, readTextFile } from "@tauri-apps/plugin-fs";
import { LazyStore } from "@tauri-apps/plugin-store";

type slippiLauncherSettings = {
  settings: {
    isoPath: string;
    useNetplayBeta: boolean;
  };
};

type slippiDetails = {
  dolphinPath: string;
  meleeIso: string;
};

export async function checkSetup() {
  const navigate = useNavigate();
  const initStore = new LazyStore("init.json");
  return (await initStore.has("isCreated"))
    ? navigate("/home")
    : navigate("/setup");
}

export async function findSlippiDetails(): Promise<slippiDetails> {
  const NETPLAY_BETA_EXECUTABLE =
    "./Slippi Launcher/netplay-beta/Slippi_Netplay_Mainline-x86_64.AppImage";
  const NETPLAY_EXECUTABLE =
    "./Slippi Launcher/netplay/Slippi_Online-x86_64.AppImage";

  const { settings }: slippiLauncherSettings = JSON.parse(
    await readTextFile("Slippi\ Launcher/Settings", {
      baseDir: BaseDirectory.Config,
    }),
  );

  return settings.useNetplayBeta
    ? { dolphinPath: NETPLAY_BETA_EXECUTABLE, meleeIso: settings.isoPath }
    : { dolphinPath: NETPLAY_EXECUTABLE, meleeIso: settings.isoPath };
}
