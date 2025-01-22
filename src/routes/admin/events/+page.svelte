<script>
	import { enhance } from '$app/forms';
	import { slide } from 'svelte/transition';

	let { data } = $props();
</script>

<h1 class="dashboard-title">Admin Dashboard</h1>

<a href="/admin/events/new" class="dashboard-link">Create a New Event</a>

<div class="events-container">
	{#each data.events as event (event.id)}
		<div class="event-box" transition:slide>
			<p class="event-details">
				<strong>ID:</strong>
				{event.id} |
				<strong>Title:</strong>
				{event.title} |
				<strong>URL:</strong>
				{event.url} |
				<strong>Start Date:</strong>
				{new Date(event.start_date).toDateString()} |
				<strong>End Date:</strong>
				{new Date(event.end_date).toDateString()} |
				<strong>Start Time:</strong>
				{event.start_time} |
				<strong>Location:</strong>
				{event.locationName} |
				<strong>Category:</strong>
				{event.categoryName}
			</p>
			<form action="?/deleteEvent" method="POST" use:enhance class="delete-form">
				<input type="hidden" name="id" value={event.id} />
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

	.events-container {
		display: flex;
		flex-direction: column;
		gap: 15px;
	}

	.event-box {
		background: #fff;
		border-radius: 8px;
		padding: 15px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}

	.event-details {
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
