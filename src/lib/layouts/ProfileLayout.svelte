<script lang="ts">
	import { afterUpdate } from "svelte";
	import { throttle } from "lodash/function";

	let listCol: HTMLElement;
	let hasScroll = false;
	let scrolling = false;

	function handleScroll(e: { target: HTMLElement }) {
		scrolling = e.target.scrollTop > 0;
	}

	afterUpdate(() => {
		hasScroll = listCol.scrollHeight > listCol.clientHeight;
	});
</script>

<main
	bind:this={listCol}
	class="list-col"
	class:no-scroll={!hasScroll}
	on:scroll={throttle(handleScroll, 50)}
>
	<slot name="list" {scrolling} />
</main>

<aside class="details-col">
	<slot name="details" />
</aside>
