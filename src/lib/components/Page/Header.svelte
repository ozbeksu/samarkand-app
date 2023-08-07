<script lang="ts">
	import { Flex } from "$lib/components";
	import { Heading } from "$lib/components";

	export let title: string;
	export let subtitle: string;
	export let titleClass: string | undefined = undefined;
	export let subtitleClass: string | undefined = undefined;
</script>

<Flex class={`text-default mb-8 w-full ${$$props.class ?? ""}`}>
	<Heading class={`text-2xl font-bold mb-2 ${titleClass ?? ""}`}>{title}</Heading>
	<p class={`${subtitleClass ?? ""}`}>{subtitle}</p>
</Flex>
