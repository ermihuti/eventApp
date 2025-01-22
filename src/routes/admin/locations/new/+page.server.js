import { createConnection } from '$lib/db/mysql';
import { redirect } from '@sveltejs/kit';

export const actions = {
	createLocation: async ({ request }) => {
		const formData = await request.formData();
		console.log(formData);

		const connection = await createConnection();
		const [result] = await connection.execute(
			'INSERT INTO locations (name, street) VALUES (?, ?)',
			[formData.get('name'), formData.get('street')]
		);
		if (result.affectedRows) {
			redirect(303, '/admin/locations');
		}
	}
};
