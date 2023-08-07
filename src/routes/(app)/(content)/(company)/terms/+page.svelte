<script lang="ts">
	import ContentLayout from "$lib/layouts/ContentLayout.svelte";
	import { Flex, PageHeader } from "$lib/components";
</script>

<ContentLayout>
	<Flex class="border-brand border-b px-8 pt-12" direction="row" slot="content">
		<PageHeader
			subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolore error nam optio repudiandae. Adipisci beatae culpa cumque ex iure maiores necessitatibus nemo nisi nulla odit quidem, recusandae sed veritatis?"
			title="Terms & Conditions"
		/>
	</Flex>
</ContentLayout>
