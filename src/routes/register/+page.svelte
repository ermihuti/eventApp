<script>
	import { enhance } from '$app/forms';
	import Warning from '$lib/components/Warning.svelte';
	export let form;
</script>

<div class="flex justify-center items-center h-screen bg-gray-100">
	<form action="?/register" method="POST" use:enhance class="bg-white rounded-lg p-6 shadow-md max-w-sm w-full flex flex-col gap-4">
		<h1 class="text-2xl mb-4 text-center text-gray-800">Register</h1>

		<div class="flex flex-col gap-1">
			<label for="email" class="text-sm text-gray-600">E-Mail</label>
			<input type="text" name="email" id="email" required class="p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500" />
		</div>

		<div class="flex flex-col gap-1">
			<label for="username" class="text-sm text-gray-600">Username</label>
			<input type="text" name="username" id="username" required class="p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500" />
		</div>

		<div class="flex flex-col gap-1">
			<label for="password" class="text-sm text-gray-600">Password</label>
			<input type="password" name="password" id="password" required class="p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500" />
		</div>

		<button type="submit" class="bg-blue-500 text-white border-none p-2 text-base rounded-md cursor-pointer transition hover:bg-blue-700 text-center">Register</button>

		{#if form}
			<Warning message={form.message} />
		{/if}
	</form>
</div>