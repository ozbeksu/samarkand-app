<script lang="ts">
	import { appStore } from "$lib/stores/AppStore";

	import SunLine from "svelte-remixicon/lib/icons/SunLine.svelte";
	import MoonLine from "svelte-remixicon/lib/icons/MoonLine.svelte";

	function handleSwitcher() {
		let theme = $appStore.theme;
		if (theme === "light") {
			document.documentElement.classList.add("dark");
			theme = "dark";
		} else {
			document.documentElement.classList.remove("dark");
			theme = "light";
		}
		
		localStorage.setItem("color-theme", theme);
		appStore.setTheme(theme);
	}
</script>

<button class="link-icon" on:click={handleSwitcher}>
	{#if $appStore.theme === "light"}
		<MoonLine class="h-6 w-6 text-white" />
	{/if}
	{#if $appStore.theme === "dark"}
		<SunLine class="h-6 w-6 text-white" />
	{/if}
</button>
