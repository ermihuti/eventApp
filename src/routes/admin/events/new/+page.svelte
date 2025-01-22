<script>
	let { data } = $props();
</script>

<h1 class="form-title">Create a New Event</h1>

<form method="POST" action="?/createEvent" class="form-container">
	<div class="form-group">
		<label for="title">Title</label>
		<input type="text" placeholder="Enter title" name="title" id="title" required />
	</div>

	<div class="form-group">
		<label for="description">Description</label>
		<textarea placeholder="Enter description" name="description" id="description" required
		></textarea>
	</div>

	<div class="form-group">
		<label for="url">URL</label>
		<input type="text" placeholder="Enter an URL" name="url" id="url" required />
	</div>

	<div class="form-group">
		<label for="startDate">Start date</label>
		<input type="date" name="startDate" id="startDate" required />
	</div>

	<div class="form-group">
		<label for="endDate">End date</label>
		<input type="date" name="endDate" id="endDate" required />
	</div>

	<div class="form-group">
		<label for="startTime">Start time</label>
		<input type="time" name="startTime" id="startTime" required />
	</div>

	<div class="form-group">
		<label for="location">Location</label>
		<select name="locationId" class="form-select">
			{#each data.locations as location (location.id)}
				<option value={location.id}>{location.name}</option>
			{/each}
		</select>
	</div>

	<div class="form-group">
		<label for="category">Category</label>
		<select name="categoryId" class="form-select">
			{#each data.categories as category (category.id)}
				<option value={category.id}>{category.name}</option>
			{/each}
		</select>
	</div>

	<button type="submit" class="form-button">Create Event</button>
</form>

<style>
	.form-title {
		font-size: 24px;
		margin-bottom: 20px;
		text-align: center;
		color: #333;
	}

	.form-container {
		background: #fff;
		border-radius: 8px;
		padding: 20px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		max-width: 400px;
		width: 100%;
		margin: 0 auto;
	}

	.form-group {
		margin-bottom: 15px;
	}

	.form-group label {
		display: block;
		font-size: 14px;
		margin-bottom: 5px;
		color: #555;
	}

	.form-group input,
	.form-group textarea {
		width: 100%;
		padding: 10px;
		border: 1px solid #ccc;
		border-radius: 4px;
		font-size: 14px;
		transition: border-color 0.3s ease;
		box-sizing: border-box; /* Ensures padding is included in the width */
	}

	.form-group input:focus,
	.form-group textarea:focus {
		border-color: #007bff;
		outline: none;
	}

	.form-group textarea {
		resize: none;
		height: 80px;
	}

	.form-button {
		background-color: #007bff;
		color: #fff;
		border: none;
		padding: 10px 15px;
		font-size: 16px;
		border-radius: 4px;
		cursor: pointer;
		width: 100%;
		transition: background-color 0.3s ease;
	}

	.form-button:hover {
		background-color: #0056b3;
	}

	.form-select {
		width: 100%;
		padding: 10px;
		border: 1px solid #ccc;
		border-radius: 4px;
		font-size: 14px;
		transition:
			border-color 0.3s ease,
			box-shadow 0.3s ease;
		background-color: #fff;
	}

	.form-select:focus {
		border-color: #007bff;
		box-shadow: 0 0 3px rgba(0, 123, 255, 0.5);
		outline: none;
	}

	.form-select option {
		font-size: 14px;
		color: #333;
	}
</style>
