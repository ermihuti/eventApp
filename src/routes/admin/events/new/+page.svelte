<script>
	let { data } = $props();
</script>

<h1 class="text-2xl mb-5 font-bold text-center text-gray-800">Create a New Event</h1>

<form method="POST" action="?/createEvent" enctype="multipart/form-data" class="bg-white rounded-lg p-6 shadow-md max-w-md mx-auto">
	<div class="mb-4">
		<label for="title" class="block text-sm font-medium text-gray-700">Title</label>
		<input type="text" id="title" name="title"  
		       class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
		       placeholder="Enter title" />
	</div>

	<div class="mb-4">
		<label for="image" class="block text-sm font-medium text-gray-700">Image</label>
		<input type="file" name="uploadedImage"  class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
	</div>

	<div class="mb-4">
		<label for="description" class="block text-sm font-medium text-gray-700">Description</label>
		<textarea id="description" name="description"  
		          class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none h-20" 
		          placeholder="Enter description"></textarea>
	</div>

	<div class="mb-4">
		<label for="url" class="block text-sm font-medium text-gray-700">URL</label>
		<input type="text" id="url" name="url"  
		       class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
		       placeholder="Enter an URL" />
	</div>

	<div class="mb-4">
		<label for="startDate" class="block text-sm font-medium text-gray-700">Start date</label>
		<input type="date" id="startDate" name="startDate"  
		       class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
	</div>

	<div class="mb-4">
		<label for="endDate" class="block text-sm font-medium text-gray-700">End date</label>
		<input type="date" id="endDate" name="endDate"  
		       class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
	</div>

	<div class="mb-4">
		<label for="startTime" class="block text-sm font-medium text-gray-700">Start time</label>
		<input type="time" id="startTime" name="startTime"  
		       class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
	</div>

	<div class="mb-4">
		<label for="location" class="block text-sm font-medium text-gray-700">Location</label>
		<select name="locationId" id="location" 
		        class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
			{#each data.locations as location (location.id)}
				<option value={location.id}>{location.name}</option>
			{/each}
		</select>
	</div>

	<div class="mb-4">
		<label for="category" class="block text-sm font-medium text-gray-700">Category</label>
		<select name="categoryId" id="category" 
		        class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
			{#each data.categories as category (category.id)}
				<option value={category.id}>{category.name}</option>
			{/each}
		</select>
	</div>

	<button type="submit" 
	        class="w-full bg-blue-500 text-white py-2 rounded text-lg hover:bg-blue-700 transition">
		Create Event
	</button>
</form>