import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/kit/vite";

/** @type {import("@sveltejs/kit").Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter()
	},

	vitePlugin: {
		inspector: {
			toggleKeyCombo: "meta-shift",
			showToggleButton: "always",
			toggleButtonPos: "bottom-right"
		}
	}
};

export default config;
