<script lang="ts">
	export let tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" = "h1";
</script>

<svelte:element class={`${$$props.class ?? ""}`} this={tag}>
	<slot />
</svelte:element>
