<script>
	import { setContext, getContext } from 'svelte';
	import HambergerMenu from './hamburgerMenu.svelte';
	import NavButton from './navButton.svelte';
	import NavButtonMobile from './navButtonMobile.svelte';
	let menuState = $state(false);
</script>

<nav class="bg-gray-800">
	<div class="mx-auto max-w-4xl px-2 md:px-6 lg:px-8">
		<div class="relative flex h-16 items-center justify-between">
			<div class="absolute inset-y-0 left-0 flex items-center md:hidden">
				<!-- Mobile menu button-->
				<HambergerMenu bind:menuState />
			</div>
			<div class="flex flex-1 items-center justify-center md:items-stretch md:justify-between">
				<div class="hidden w-full md:ml-6 md:block">
					<div class="flex justify-between space-x-4">
						<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
						<NavButton href="/" title="Bio" />
						<NavButton href="/resume" title="Resume" />
						<NavButton href="/cover-letter" title="Cover Letter" />
						<NavButton href="/philosophy" title="Philosophy" />
						<NavButton href="/credentials" title="Credentials" />
						<NavButton href="/capstone" title="Capstone" />
						<NavButton href="/work-experience" title="Work Experience" />
						<NavButton href="/work-samples" title="Work Samples" />
					</div>
				</div>
			</div>
		</div>

		<!-- Mobile menu, show/hide based on menu state. -->
		<div class="md:hidden {menuState ? 'hidden' : 'block'}" id="mobile-menu">
			<div class="space-y-1 px-2 pt-2 pb-3">
				<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
				<NavButtonMobile href="/" title="Bio" />
				<NavButtonMobile href="/resume" title="Resume" />
				<NavButtonMobile href="/cover-letter" title="Cover Letter" />
				<NavButtonMobile href="/philosophy" title="Philosophy" />
				<NavButtonMobile href="/credentials" title="Credentials" />
				<NavButton href="/capstone" title="Capstone" />
				<NavButtonMobile href="/work-experience" title="Work Experience" />
				<NavButtonMobile href="/work-samples" title="Work Samples" />

				<!-- <a -->
				<!-- 	href="#" -->
				<!-- 	class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" -->
				<!-- 	aria-current="page">Bio</a -->
				<!-- > -->
				<!-- <a -->
				<!-- 	href="#" -->
				<!-- 	class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white" -->
				<!-- 	>Resume</a -->
				<!-- > -->
				<!-- <a -->
				<!-- 	href="#" -->
				<!-- 	class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white" -->
				<!-- 	>Cover Letter</a -->
				<!-- > -->
				<!-- <a -->
				<!-- 	href="#" -->
				<!-- 	class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white" -->
				<!-- 	>Philosophy</a -->
				<!-- > -->
				<!-- <a -->
				<!-- 	href="#" -->
				<!-- 	class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white" -->
				<!-- 	>Credentials</a -->
				<!-- > -->
				<!-- <a -->
				<!-- 	href="#" -->
				<!-- 	class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white" -->
				<!-- 	>Work Experience</a -->
				<!-- > -->
			</div>
		</div>
	</div>
</nav>
