<script lang="ts">
	import FullLayout from "$lib/layouts/FullLayout.svelte";
	import { Flex, Heading, FormWrapper } from "$lib/components";
	import { Profile } from "$lib/forms";
</script>

<FullLayout>
	<Flex slot="content">
		<FormWrapper class="mb-8 border-brand border p-8" width="w-112">
			<div class="text-default mb-4 w-full p-4" slot="header">
				<Heading class="text-2xl font-bold mb-2">Create Profile</Heading>
				We have created your account. Now, let's create your profile!
			</div>
			<Profile slot="form" />
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
