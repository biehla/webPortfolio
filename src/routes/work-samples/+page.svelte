<script lang="ts">
	import Bio from './work-experience.svx';
	import Nav from '../nav.svelte';
</script>

<header
	class="bg-linear-to-t from-gray-800 to-indigo-800 p-20 text-base font-bold text-white md:rounded-t-2xl"
>
	<h1 class="text-center text-7xl underline decoration-amber-300">Anand Biehl</h1>
</header>
<Nav />
<article
	class="bg-indigo-50 pt-15 pb-15 text-justify text-lg leading-8 font-medium text-wrap text-gray-900 md:rounded-b-2xl"
>
	<div class="container mx-auto max-w-prose p-10">
		<Bio />
	</div>
</article>
