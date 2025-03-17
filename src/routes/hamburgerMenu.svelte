<script>
	let { menuState = $bindable(), ...props } = $props();
</script>

<button
	type="button"
	class="focus:outline-hidden relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-inset focus:ring-white"
	aria-controls="mobile-menu"
	aria-expanded="false"
	onclick={() => {
		menuState = !menuState;
	}}
>
	<span class="absolute -inset-0.5"></span>
	<span class="sr-only">Open main menu</span>
	<!--
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
          -->
	<svg
		class="block size-6"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
		aria-hidden="true"
		data-slot="icon"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
		/>
	</svg>
	<!--
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          -->
	<svg
		class="hidden size-6"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
		aria-hidden="true"
		data-slot="icon"
	>
		<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
	</svg>
</button>
