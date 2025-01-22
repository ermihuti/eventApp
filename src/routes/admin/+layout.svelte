<script>
	let { children } = $props();
</script>

<nav class="nav-bar">
	<a href="/" class="nav-link">🏠Home</a>
	<a href="/admin/events" class="nav-link">Events</a>
	<a href="/admin/locations" class="nav-link">Locations</a>
	<a href="/admin/categories" class="nav-link">Categories</a>
</nav>

<main class="content">
	{@render children()}
</main>

<style>
	.nav-bar {
		background-color: #333;
		padding: 10px;
		display: flex;
		gap: 20px;
	}
	.nav-link {
		color: #fff;
		text-decoration: none;
		font-size: 1.2em;
		transition: color 0.3s ease;
	}
	.nav-link:hover {
		color: #f39c12;
	}
	.content {
		margin: 20px;
		padding: 20px;
		background: #f9f9f9;
		border-radius: 8px;
	}
</style>
