<script>
	import { flip } from 'svelte/animate';

	let { data } = $props();

	let filteredEvents = $state(data.events);
	let selectedCategory = $state('all');

	function filterEvents() {
		if (selectedCategory === 'all') {
			filteredEvents = data.events;
		} else {
			filteredEvents = data.events.filter((e) => e.category_id === selectedCategory.id);
		}
	}
</script>

<div>
	<div class="text-center mb-5">
		{#if data.user}
			<p class="text-green-600 text-lg">Welcome back, {data.user.username}!</p>

			<div class="flex justify-center gap-3 mt-4">
				<form action="/logout?/logout" method="POST">
					<button type="submit" class="bg-blue-500 text-white px-5 py-2 text-lg rounded hover:bg-blue-700">Logout</button>
				</form>
				<form action="/logout?/deleteAcc" method="POST">
					<button type="submit" class="bg-red-600 text-white px-5 py-2 text-lg rounded hover:bg-red-800">Delete Account</button>
				</form>
			</div>
		{:else}
			<p class="text-orange-600 text-base">
				You are not logged in.
				<a href="/login" class="text-blue-500 font-bold hover:underline">Login</a>
				or
				<a href="/register" class="text-blue-500 font-bold hover:underline">Register</a>
			</p>
		{/if}
	</div>
</div>

<h1 class="text-4xl text-center text-gray-800 mb-4">My Event App</h1>
<p class="text-center text-gray-600 mb-6 text-lg">Explore events by category or see them all at once.</p>

<div class="text-center mb-8">
	<label for="category-filter" class="text-gray-800 text-base mr-2">Choose a category:</label>
	<select id="category-filter" bind:value={selectedCategory} onchange={filterEvents} class="px-3 py-2 text-base border border-gray-300 rounded cursor-pointer focus:border-blue-500">
		<option value="all">All</option>
		{#each data.categories as category}
			<option value={category}>{category.name}</option>
		{/each}
	</select>
</div>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
	{#if filteredEvents.length > 0}
		{#each filteredEvents as event (event.id)}
			<div class="bg-white rounded-lg p-4 shadow-lg transition-transform transform hover:-translate-y-1">
				<img src="{event.image}" alt="uploaded" class="w-64 h-64 object-contain rounded-lg border border-gray-300">
				<p class="text-gray-700 text-base">
					<strong class="text-gray-900">ID:</strong> {event.id} |
					<strong class="text-gray-900">Title:</strong> {event.title} |
					<strong class="text-gray-900">Start Date:</strong> {new Date(event.start_date).toDateString()}
				</p>
			</div>
		{/each}
	{:else}
		<p class="text-lg text-gray-500 text-center mt-5">No events available in this category.</p>
	{/if}
</div>