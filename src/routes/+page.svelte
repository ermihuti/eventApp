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
	<div class="container">
		{#if data.user}
			<p class="welcome-message">Welcome back, {data.user.username}!</p>

			<div class="button-container">
			<form action="/logout?/logout" method="POST">
				<button type="submit" class="btn">Logout</button>
			</form>
			<form action="/logout?/deleteAcc" method="POST">
				<button type="submit" class="btn btn-danger">Delete Account</button>
			</form>
			</div>
		{:else}
			<p class="login-message">
				You are not logged in.
				<a href="/login" class="login-link">Login</a>
				or
				<a href="/register" class="login-link">Register</a>
			</p>
		{/if}
	</div>
</div>

<h1 class="events-title">My Event App</h1>

<p class="events-description">Explore events by category or see them all at once.</p>

<div class="filter-container">
	<label for="category-filter" class="filter-label">Choose a category:</label>
	<select id="category-filter" bind:value={selectedCategory} onchange={filterEvents}>
		<option value="all">All</option>
		{#each data.categories as category}
			<option value={category}>{category.name}</option>
		{/each}
	</select>
</div>

<div class="events-container">
	{#if filteredEvents.length > 0}
		{#each filteredEvents as event (event.id)}
			<div animate:flip class="event-card">
				<p class="event-details">
					<strong>ID:</strong>
					{event.id} |
					<strong>Title:</strong>
					{event.title} |
					<strong>Start Date:</strong>
					{new Date(event.start_date).toDateString()}
				</p>
			</div>
		{/each}
	{:else}
		<p class="no-events-message">No events available in this category.</p>
	{/if}
</div>

<style>
	.container {
		text-align: center;
		margin-bottom: 20px;
	}

	.welcome-message {
		color: #4caf50;
		font-size: 1.2em;
	}

	.login-message {
		color: #ff5722;
		font-size: 1em;
	}

	.login-link {
		color: #007bff;
		text-decoration: none;
		font-weight: bold;
	}

	.login-link:hover {
		text-decoration: underline;
	}

	.events-title {
		font-size: 2.5em;
		margin-bottom: 15px;
		text-align: center;
		color: #333;
	}

	.events-description {
		text-align: center;
		color: #555;
		margin-bottom: 25px;
		font-size: 1.2em;
	}

	.filter-container {
		text-align: center;
		margin-bottom: 30px;
	}

	.filter-label {
		font-size: 1em;
		margin-right: 10px;
		color: #333;
	}

	select {
		padding: 8px 12px;
		font-size: 1em;
		border: 1px solid #ddd;
		border-radius: 5px;
		outline: none;
		cursor: pointer;
	}

	select:focus {
		border-color: #007bff;
	}

	.events-container {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 20px;
		max-width: 1000px;
		margin: 0 auto;
	}

	.event-card {
		background: #fff;
		border-radius: 10px;
		padding: 15px;
		box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);
		transition: transform 0.3s ease;
	}

	.event-card:hover {
		transform: translateY(-5px);
	}

	.event-details {
		font-size: 1em;
		color: #444;
	}

	.event-details strong {
		font-weight: bold;
		color: #333;
	}

	.no-events-message {
		font-size: 1.2em;
		color: #888;
		margin-top: 20px;
		text-align: center;
	}

	.btn {
		background-color: #007bff;
		color: #fff;
		border: none;
		padding: 10px 20px;
		font-size: 16px;
		border-radius: 5px;
		cursor: pointer;
		display: inline-block;
		margin: 5px;
	}

	.btn:hover {
		background-color: #0056b3;
	}

	.btn-danger {
		background-color: #dc3545;
	}

	.btn-danger:hover {
		background-color: #b02a37;
	}

	.button-container {
		display: flex;
		justify-content: center;
		gap: 10px;
		margin-top: 15px;
	}
</style>