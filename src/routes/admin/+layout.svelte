<script>
	let { children } = $props();
</script>

<nav class="bg-gray-900 p-4 flex gap-6">
	<a href="/" class="text-white text-lg hover:text-yellow-400 transition">🏠 Home</a>
	<a href="/admin/events" class="text-white text-lg hover:text-yellow-400 transition">Events</a>
	<a href="/admin/locations" class="text-white text-lg hover:text-yellow-400 transition">Locations</a>
	<a href="/admin/categories" class="text-white text-lg hover:text-yellow-400 transition">Categories</a>
</nav>

<main class="m-5 p-6 bg-gray-100 rounded-lg shadow-md">
	{@render children()}
</main>