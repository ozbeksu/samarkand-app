<script lang="ts">
	import { Logo } from "$lib/components";
	import { Flex } from "$lib/components";
</script>

<Flex>
	<Logo />

	<slot />
</Flex>
