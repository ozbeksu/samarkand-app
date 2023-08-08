<script lang="ts">
	import type { DTO } from "$lib/types";
	import { onMount } from "svelte";

	import ArrowLeftSLine from "svelte-remixicon/lib/icons/ArrowLeftSLine.svelte";
	import ArrowRightSLine from "svelte-remixicon/lib/icons/ArrowRightSLine.svelte";

	export let list: DTO.Attachment[];

	let index = 1;
	let carousel: HTMLDivElement;

	function plusSlides(n: number) {
		showSlides((index += n));
	}

	function showSlides(n: number) {
		const slides = carousel.getElementsByClassName("slide");
		if (n > slides.length) {
			index = 1;
		}
		if (n < 1) {
			index = slides.length;
		}
		for (let i = 0; i < slides.length; i++) {
			(slides[i] as HTMLDivElement).style.display = "none";
		}
		(slides[index - 1] as HTMLDivElement).style.display = "block";
	}

	onMount(() => {
		if (list?.length) {
			showSlides(index);
		}
	});
</script>

{#if list?.length}
	<div bind:this={carousel} class="slides-container">
		{#each list as attachment}
			<div class="slide fade">
				<img alt={attachment.file_name} class="w-full" src={attachment.url} />
			</div>
		{/each}

		<button class="prev btn btn-transparent btn-xs" on:click={() => plusSlides(-1)}>
			<ArrowLeftSLine class="w-10 h-10 text-default" />
		</button>
		<button class="next btn btn-transparent btn-xs" on:click={() => plusSlides(1)}>
			<ArrowRightSLine class="w-10 h-10 text-default`" />
		</button>
	</div>
{/if}

<style>
	.slides-container {
		position: relative;
		margin: auto;
	}

	.slide {
		display: none;
	}

	.prev,
	.next {
		top: 50%;
		width: auto;
		cursor: pointer;
		position: absolute;
		user-select: none;
		transition: 0.6s ease;
		border-radius: 0 3px 3px 0;
	}

	.next {
		right: 0;
		border-radius: 3px 0 0 3px;
	}

	.fade {
		animation-name: fade;
		animation-duration: 1.5s;
	}

	@keyframes fade {
		from {
			opacity: 0.4;
		}
		to {
			opacity: 1;
		}
	}
</style>
