<script>
	let { data } = $props();
</script>

<h1 class="text-2xl font-bold text-center text-gray-800 mb-5">Create a New Category</h1>

<form method="POST" action="?/createCategory" class="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto">
	<div class="mb-4">
		<label for="name" class="block text-sm font-medium text-gray-700">Name</label>
		<input type="text" id="name" name="name" placeholder="Enter a name" required
		       class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" />
	</div>
	<button type="submit" 
	        class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700 transition">
		Create Category
	</button>
</form>