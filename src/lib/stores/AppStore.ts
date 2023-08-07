import type { Writable } from "svelte/store";
import { writable } from "svelte/store";

type ColorScheme = "light" | "dark";

export type AppStoreData = {
	sidebarShown: boolean;
	drawerShown: boolean;
	theme: ColorScheme;
	commentId?: number;
	communityId?: number;
};

interface AppStore extends AppStoreData {
	reset: () => void;
	setDrawer: (status: boolean) => void;
	toggleDrawer: () => void;
	setSidebar: (status: boolean) => void;
	toggleSidebar: () => void;
	setTheme: (theme: string) => void;
}

const initialState: AppStoreData = {
	sidebarShown: true,
	drawerShown: false,
	theme: "light",
	commentId: 0,
	communityId: 0
};

function createAppStore(): Writable<AppStoreData> & AppStore {
	const { set, update, subscribe } = writable<AppStoreData>(initialState);

	function setDrawer(status: boolean) {
		update((state) => ({ ...state, drawerShown: status }));
	}

	function toggleDrawer() {
		update((state) => ({ ...state, drawerShown: !state.drawerShown }));
	}

	function setSidebar(status: boolean) {
		update((state) => ({ ...state, sidebarShown: status }));
	}

	function toggleSidebar() {
		update((state) => ({ ...state, sidebarShown: !state.sidebarShown }));
	}

	function setTheme(theme: ColorScheme) {
		update((state) => ({ ...state, theme: theme }));
	}

	function reset() {
		update(() => ({ ...initialState }));
	}

	return {
		set,
		update,
		subscribe,
		reset,
		setTheme,
		setDrawer,
		toggleDrawer,
		setSidebar,
		toggleSidebar
	} as Writable<AppStoreData> & AppStore;
}

export const appStore = createAppStore();
