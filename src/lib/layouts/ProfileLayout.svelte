<script lang="ts">
	import { throttle } from "lodash/function";

	let scrolling = false;

	function handleScroll(e: { target: HTMLElement }) {
		scrolling = e.target.scrollTop > 0;
	}
</script>

<main class="list-col" on:scroll={throttle(handleScroll, 100)}>
	<slot name="list" {scrolling} />
</main>

<aside class="details-col">
	<slot name="details" />
</aside>
