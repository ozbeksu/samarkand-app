<script lang="ts">
	let scrolling = false;
	let scrollingPause = false;

	function handleScroll(e) {
		scrolling = e.target.scrollTop > 0;
	}

	function throttle(callback: () => void, time: number) {
		if (scrollingPause) return;

		scrollingPause = true;
		setTimeout(() => {
			callback();
			scrollingPause = false;
		}, time);
	}
</script>

<main class="list-col" on:scroll={(e) => throttle(() => handleScroll(e), 100)}>
	<slot name="list" {scrolling} />
</main>

<aside class="details-col">
	<slot name="details" />
</aside>
