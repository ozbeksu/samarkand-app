<script lang="ts">
	import type { DTO } from "$lib/types";
	import { Flex } from "$lib/components";

	export let user: DTO.User | null | undefined;
</script>

{#if user?.profile?.avatar?.url}
	<img
		class={`rounded-full border border-brand ${$$props.class ?? ""}`}
		src={user?.profile?.avatar.url}
		alt={user?.username}
	/>
{:else}
	<Flex
		class={`bg-dark-800 dark:bg-light-800 border-brand border rounded-full justify-center items-center ${
			$$props.class ?? ""
		}`}
	>
		${user?.profile.first_name.charAt(0)}${user?.profile.last_name.charAt(0)}
	</Flex>
{/if}
