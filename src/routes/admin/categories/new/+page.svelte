<script>
	let { data } = $props();
</script>

<h1 class="form-title">Create a New Category</h1>

<form method="POST" action="?/createCategory" class="form-container">
	<div class="form-group">
		<label for="name">Name</label>
		<input type="text" placeholder="Enter a name" name="name" id="name" required />
	</div>
	<button type="submit" class="form-button">Create Category</button>
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

	.form-group input {
		width: 100%;
		padding: 10px;
		border: 1px solid #ccc;
		border-radius: 4px;
		font-size: 14px;
		transition: border-color 0.3s ease;
		box-sizing: border-box; /* Ensures padding is included in the width */
	}

	.form-group input:focus {
		border-color: #007bff;
		outline: none;
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
</style>
