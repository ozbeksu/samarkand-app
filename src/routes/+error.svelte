<script lang="ts">
	import FullLayout from "$lib/layouts/FullLayout.svelte";
	import { Heading, Flex } from "$lib/components";
</script>

<FullLayout>
	<Flex slot="content">
		<Heading color="text-primary" tag="h1">404</Heading>
		<Heading class="my-2" tag="h3">Page Not Found!</Heading>
		<p>Either something went wrong or this page doesn't exist anymore.</p>
	</Flex>
</FullLayout>
