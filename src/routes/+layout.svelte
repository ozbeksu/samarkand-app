<script lang="ts">
	import "$lib/styles/app.css";
	import { onMount } from "svelte";
	import { appStore } from "$lib/stores/AppStore";

	onMount(() => {
		let colorSchema: string | null = localStorage.getItem("color-theme");
		if (!colorSchema) {
			if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
				document.documentElement.classList.add("dark");
				colorSchema = "dark";
			} else {
				document.documentElement.classList.remove("dark");
				colorSchema = "light";
			}
		} else {
			if (colorSchema === "dark") {
				document.documentElement.classList.add("dark");
				colorSchema = "dark";
			} else {
				document.documentElement.classList.remove("dark");
				colorSchema = "light";
			}
		}

		localStorage.setItem("color-theme", colorSchema);
		appStore.setTheme(colorSchema);
	});
</script>

<svelte:head>
	<title>Home - Samarkand</title>
</svelte:head>

<slot />
