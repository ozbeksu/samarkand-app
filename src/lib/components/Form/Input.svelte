<script lang="ts">
	export let label: string | undefined = undefined;
	export let value: string | number | undefined = undefined;
	let id = $$restProps?.id ?? new Date().valueOf().toString();
</script>

{#if Boolean(label)}
	<label for={id}>{label}</label>
{/if}
{#if $$slots.right}
	<div class="relative">
		<input {...$$restProps} bind:value class={`input !pr-12 ${$$props.class ?? ""}`} {id} />
		<div class="flex absolute right-0 inset-y-0 items-center">
			<slot name="right" />
		</div>
	</div>
{:else if $$slots.left}
	<div class="relative">
		<div class="flex absolute left-0 inset-y-0 items-center">
			<slot name="left" />
		</div>
		<input {...$$restProps} bind:value class={`input !pl-12 ${$$props.class ?? ""}`} {id} />
	</div>
{:else}
	<input {...$$restProps} bind:value class={`input ${$$props.class ?? ""}`} {id} />
{/if}
