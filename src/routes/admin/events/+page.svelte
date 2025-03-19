<script>
	import { enhance } from '$app/forms';
	import { slide } from 'svelte/transition';

	let { data } = $props();
</script>

<h1 class="text-2xl mb-5 text-center text-gray-800">Admin Dashboard</h1>

<a href="/admin/events/new" 
   class="inline-block bg-blue-500 text-white font-bold text-lg px-4 py-2 rounded hover:bg-blue-700 transition mb-5">
   Create a New Event
</a>

<div class="flex flex-col gap-4">
	{#each data.events as event (event.id)}
		<div transition:slide 
		     class="bg-white rounded-lg p-4 shadow-md">
			<p class="text-sm text-gray-600 mb-3">
				<strong>ID:</strong> {event.id} |
				<strong>Title:</strong> {event.title} |
				<strong>URL:</strong> {event.url} |
				<strong>Start Date:</strong> {new Date(event.start_date).toDateString()} |
				<strong>End Date:</strong> {new Date(event.end_date).toDateString()} |
				<strong>Start Time:</strong> {event.start_time} |
				<strong>Location:</strong> {event.locationName} |
				<strong>Category:</strong> {event.categoryName}
			</p>
			<form action="?/deleteEvent" method="POST" use:enhance 
			      class="flex justify-end">
				<input type="hidden" name="id" value={event.id} />
				<button type="submit" 
				        class="bg-red-500 text-white px-3 py-2 rounded text-sm hover:bg-red-700 transition">
					Delete
				</button>
			</form>
		</div>
	{/each}
</div>