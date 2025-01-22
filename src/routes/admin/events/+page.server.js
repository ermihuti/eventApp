import { createConnection } from '$lib/db/mysql';
import { redirect } from '@sveltejs/kit';

export async function load({ locals }) {
	if (!locals.user || locals.user.role !== 'admin') {
		redirect(302, '/login');
	}

	let connection = await createConnection();
	let [rows] = await connection.execute(
		'SELECT e.*, l.name AS locationName, c.name AS categoryName FROM events e LEFT JOIN locations l ON e.location_id = l.id LEFT JOIN categories c ON e.category_id = c.id'
	);

	return {
		events: rows
	};
}

export const actions = {
	deleteEvent: async ({ request }) => {
		const formData = await request.formData();
		const id = formData.get('id');
		const connection = await createConnection();
		const [result] = await connection.execute('DELETE FROM events WHERE id = ?', [id]);
	}
};
