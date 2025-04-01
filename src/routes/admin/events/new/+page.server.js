import { createConnection } from '$lib/db/mysql';
import { redirect } from '@sveltejs/kit';
import { error } from "@sveltejs/kit";
import { put } from "@vercel/blob";
import { BLOB_READ_WRITE_TOKEN } from "$env/static/private";

export async function load() {
	let connection = await createConnection();
	let [locations, categories] = await Promise.all([
		connection.execute('SELECT * FROM locations'),
		connection.execute('SELECT * FROM categories')
	]);

	return {
		locations: locations[0],
		categories: categories[0]
	};
}

export const actions = {
	createEvent: async ({ request }) => {
		const formData = await request.formData();
		const uploadedImage = formData.get('uploadedImage');
		const { url } = await put('eventImages/' + uploadedImage.name, uploadedImage, { access: "public", token: BLOB_READ_WRITE_TOKEN});
		console.log(formData);
		console.log(url);

		const connection = await createConnection();
		const [result] = await connection.execute(
			'INSERT INTO events (title, description, url, start_date, end_date, start_time, image, location_id, category_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
			[
				formData.get('title'),
				formData.get('description'),
				formData.get('url'),
				formData.get('startDate'),
				formData.get('endDate'),
				formData.get('startTime'),
				url,
				formData.get('locationId'),
				formData.get('categoryId')
			]
		);
		if (result.affectedRows) {
			redirect(303, '/admin/events');
		}
	}
};
