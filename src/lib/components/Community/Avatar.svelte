<script lang="ts">
	export let imgSrc: string | undefined;
</script>

<div
	class={`flex justify-center items-center rounded-full bg-cover bg-no-repeat bg-center border-secondary ${
		$$props.class ?? ""
	}`}
	style:background-image={`url(${imgSrc})`}
/>
