<script lang="ts">
	import { Box } from "$lib/components";
</script>

<Box {...{ class: $$props.class }}>
	<slot name="header" />
	<div class="flex flex-col">
		<slot name="form" />
	</div>
	<slot name="footer" />
</Box>
