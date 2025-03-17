<script>
	import { page } from '$app/state';
	const { href, title } = $props();
	let curPath = $state(page.url.pathname);
</script>

{#if curPath === href}
	<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
	<a
		{href}
		class="text-md rounded-md bg-gray-900 px-3 py-2 font-medium text-white"
		aria-current="page">{title}</a
	>
{:else}
	<a
		{href}
		class="text-md rounded-md px-3 py-2 font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
		>{title}</a
	>
{/if}
