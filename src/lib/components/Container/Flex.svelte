<script lang="ts">
	export let direction = 'col';
</script>

<div class={`flex flex-${direction} ${$$props.class ?? ''}`}>
	<slot />
</div>
