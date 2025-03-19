import db from '$lib/db';
import { fail } from '@sveltejs/kit';

export const actions = {
	addFriend: async (event) => {
		const form = await event.request.formData();
		const name = form.get('name');
		const age = form.get('age');
		const interest = form.get('interest');

		if (typeof name !== 'string') {
			return fail(500, { name, incorrect: true });
		}

		if (typeof age !== 'number') {
			return fail(500, { age, incorrect: true });
		}

		if (typeof interest !== 'string') {
			return fail(500, { interest, incorrect: true });
		}

		// Dodaj novega prijatelja
		await db.friend.create({
			data: {
				name: name,
				age: parseInt(age),
				interest: interest
			}
		});
	}
};

export async function load() {
	const friends = await db.friend.findMany();

	return {
		friends: friends
	};
}
