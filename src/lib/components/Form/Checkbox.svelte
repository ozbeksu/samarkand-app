<script lang="ts">
	export let checked: boolean | undefined = false;

	function handleChecked() {
		checked = !checked;
	}
</script>

<div class="checkbox">
	<input {...$$restProps} bind:checked class={`${$$props.class ?? ""}`} type="checkbox" />
	<slot />
</div>
