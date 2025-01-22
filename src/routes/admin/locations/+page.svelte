<script>
	import { enhance } from '$app/forms';
	import { slide } from 'svelte/transition';
	import Warning from '$lib/components/Warning.svelte';

	let { data, form } = $props();
</script>

<h1 class="dashboard-title">Admin Dashboard</h1>

<a href="/admin/locations/new" class="dashboard-link">Add a New Location</a>

{#if form && !form.success}
	<Warning message={form.message} />
{/if}

<div class="locations-container">
	{#each data.locations as location (location.id)}
		<div class="location-box" transition:slide>
			<p class="location-details">
				<strong>ID:</strong>
				{location.id} |
				<strong>Name:</strong>
				{location.name} |
				<strong>Street:</strong>
				{location.street}
			</p>
			<form action="?/deleteLocation" method="POST" use:enhance class="delete-form">
				<input type="hidden" name="id" value={location.id} />
				<button type="submit" class="delete-button">Delete</button>
			</form>
		</div>
	{/each}
</div>

<style>
	.dashboard-title {
		font-size: 2em;
		margin-bottom: 20px;
		text-align: center;
		color: #333;
	}

	.dashboard-link {
		display: inline-block;
		background-color: #007bff;
		color: #fff;
		text-decoration: none;
		padding: 10px 15px;
		border-radius: 4px;
		margin-bottom: 20px;
		transition: background-color 0.3s ease;
	}

	.dashboard-link:hover {
		background-color: #0056b3;
	}

	.locations-container {
		display: flex;
		flex-direction: column;
		gap: 15px;
	}

	.location-box {
		background: #fff;
		border-radius: 8px;
		padding: 15px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}

	.location-details {
		font-size: 14px;
		color: #555;
		margin-bottom: 10px;
	}

	.delete-form {
		display: flex;
		justify-content: flex-end;
	}

	.delete-button {
		background-color: #ff4d4d;
		color: #fff;
		border: none;
		padding: 8px 12px;
		border-radius: 4px;
		cursor: pointer;
		font-size: 14px;
		transition: background-color 0.3s ease;
	}

	.delete-button:hover {
		background-color: #cc0000;
	}
</style>
