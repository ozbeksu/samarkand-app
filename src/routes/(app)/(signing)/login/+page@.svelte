<script lang="ts">
	import FullLayout from "$lib/layouts/FullLayout.svelte";
	import { Flex, Heading, FormWrapper } from "$lib/components";
	import { Login } from "$lib/forms";
</script>

<FullLayout>
	<Flex slot="content">
		<FormWrapper class="mb-8 p-8 border border-brand" width="w-112">
			<div class="text-default mb-4 w-full p-4" slot="header">
				<Heading class="text-2xl font-bold mb-2 ">Login</Heading>
				Don't have an account? <a href="/register">Click here to sign up</a>
			</div>
			<Login slot="form" />
			<div class="text-secondary center mt-2 flex flex-row" slot="footer">
				©2023 App. All rights reserved
			</div>
		</FormWrapper>

		<ul class="list-none center text-sm">
			<li><a class="text-secondary mx-2" href="/about">About</a></li>
			<li><a class="text-secondary mx-2" href="/terms">Terms & Conditions</a></li>
			<li><a class="text-secondary mx-2" href="/privacy">Privacy Policy</a></li>
			<li><a class="text-secondary mx-2" href="/cookies">Cookies Policy</a></li>
			<li><a class="text-secondary mx-2" href="/contact">Contact</a></li>
		</ul>
	</Flex>
</FullLayout>
