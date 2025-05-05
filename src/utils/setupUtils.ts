import { useNavigate } from "@solidjs/router";
import { LazyStore } from "@tauri-apps/plugin-store";

export async function checkSetup() {
	const navigate = useNavigate();
	const initStore = new LazyStore("init.json");
	return await initStore.has('isCreated') ? navigate('/home') : navigate('/setup');
}

export function findSlippiDolphin() {

}
