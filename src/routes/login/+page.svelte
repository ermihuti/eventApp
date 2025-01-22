<script>
	import { enhance } from '$app/forms';
	import Warning from '$lib/components/Warning.svelte';
	export let form;
</script>

<div class="login-container">
	<form action="?/login" method="POST" use:enhance class="login-form">
		<h1 class="form-title">Login</h1>

		<div class="form-group">
			<label for="email">E-Mail</label>
			<input type="email" name="email" id="email" placeholder="Enter your email" required />
		</div>

		<div class="form-group">
			<label for="password">Password</label>
			<input
				type="password"
				name="password"
				id="password"
				placeholder="Enter your password"
				required
			/>
		</div>

		<button type="submit" class="btn-primary">Login</button>

		{#if form}
			<Warning message={form.message} />
		{/if}
	</form>
</div>

<style>
	.login-container {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		background-color: #f5f5f5;
	}

	.login-form {
		background: #fff;
		border-radius: 10px;
		padding: 20px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		max-width: 400px;
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 15px;
	}

	.form-title {
		font-size: 24px;
		margin-bottom: 20px;
		text-align: center;
		color: #333;
	}

	.form-group {
		display: flex;
		flex-direction: column;
		gap: 5px;
	}

	.form-group label {
		font-size: 14px;
		color: #555;
	}

	.form-group input {
		padding: 10px;
		border: 1px solid #ccc;
		border-radius: 5px;
		font-size: 14px;
		transition: border-color 0.3s ease;
	}

	.form-group input:focus {
		border-color: #007bff;
		outline: none;
	}

	.btn-primary {
		background-color: #007bff;
		color: #fff;
		border: none;
		padding: 10px 15px;
		font-size: 16px;
		border-radius: 5px;
		cursor: pointer;
		transition: background-color 0.3s ease;
		text-align: center;
	}

	.btn-primary:hover {
		background-color: #0056b3;
	}
</style>
