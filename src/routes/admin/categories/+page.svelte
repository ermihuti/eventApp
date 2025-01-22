<script>
	import { enhance } from '$app/forms';
	import { slide } from 'svelte/transition';
	import Warning from '$lib/components/Warning.svelte';

	let { data, form } = $props();
</script>

<h1 class="dashboard-title">Admin Dashboard</h1>

<a href="/admin/categories/new" class="dashboard-link">Create a New Category</a>

{#if form && !form.success}
	<Warning message={form.message} />
{/if}

<div class="categories-container">
	{#each data.categories as category (category.id)}
		<div class="category-box" transition:slide>
			<p class="category-details">
				<strong>ID:</strong>
				{category.id} |
				<strong>Name:</strong>
				{category.name}
			</p>
			<form action="?/deleteCategory" method="POST" use:enhance class="delete-form">
				<input type="hidden" name="id" value={category.id} />
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

	.categories-container {
		display: flex;
		flex-direction: column;
		gap: 15px;
	}

	.category-box {
		background: #fff;
		border-radius: 8px;
		padding: 15px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}

	.category-details {
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
