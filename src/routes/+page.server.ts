import db from '$lib/db';

export const actions = {
	addFriend: async (event) => {
		const form = await event.request.formData();
		const name = form.get('name');
		const age = form.get('age');
		const interest = form.get('interest');

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
