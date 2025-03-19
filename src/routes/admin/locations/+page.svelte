<script>
	import { enhance } from '$app/forms';
	import { slide } from 'svelte/transition';
	import Warning from '$lib/components/Warning.svelte';

	let { data, form } = $props();
</script>

<h1 class="text-2xl mb-5 font-bold text-center text-gray-800">Admin Dashboard</h1>

<a href="/admin/locations/new" 
	class="inline-block bg-blue-500 text-white text-lg px-4 py-2 rounded hover:bg-blue-700 transition mb-5">
	Add a New Location
</a>

{#if form && !form.success}
	<Warning message={form.message} />
{/if}

<div class="flex flex-col gap-4 mt-5">
	{#each data.locations as location (location.id)}
		<div transition:slide 
		     class="bg-white rounded-lg p-4 shadow-md">
			<p class="text-sm text-gray-600 mb-3">
				<strong>ID:</strong> {location.id} | 
				<strong>Name:</strong> {location.name} | 
				<strong>Street:</strong> {location.street}
			</p>
			<form action="?/deleteLocation" method="POST" use:enhance 
			      class="flex justify-end">
				<input type="hidden" name="id" value={location.id} />
				<button type="submit" 
				        class="bg-red-500 text-white text-sm px-3 py-1 rounded hover:bg-red-700 transition">
					Delete
				</button>
			</form>
		</div>
	{/each}
</div>