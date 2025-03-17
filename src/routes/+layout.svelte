<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="min-w-fit md:m-25 lg:m-40">
	{@render children()}
</div>
