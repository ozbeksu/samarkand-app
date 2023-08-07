<script lang="ts">
	import { createEventDispatcher } from "svelte";

	export let type: "button" | "submit" = "button";
	export let size: "xs" | "sm" | "lg" | "xl" | "md" = "md";

	const dispatch = createEventDispatcher();
</script>

<button
	class={`btn btn-${size} ${$$props.class ?? ""}`}
	on:click={(...args) => dispatch("click", ...args)}
	{type}
>
	<slot />
</button>
