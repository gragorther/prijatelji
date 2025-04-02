import db from '$lib/db';
import { fail } from '@sveltejs/kit';

export const actions = {
	addFriend: async (event) => {
		console.log('kebab');
		const form = await event.request.formData();
		const name = form.get('name');
		const age = parseInt(form.get('age'));
		const interest = form.get('interest');
		const favcolor = form.get('favcolor');
		const image = form.get('image');

		if (typeof name !== 'string') {
			return fail(500, { name, incorrect: true });
		}

		console.log(typeof age);
		if (typeof age !== 'number') {
			return fail(500, { age, incorrect: true });
		}

		if (typeof interest !== 'string') {
			return fail(500, { interest, incorrect: true });
		}

		if (typeof favcolor !== 'string') {
			return fail(500, { favcolor, incorrect: true });
		}
		if (typeof image !== 'string') {
			return fail(500, { image, incorrect: true });
		}

		// Dodaj novega prijatelja
		await db.friend.create({
			data: {
				name: name,
				age: age,
				interest: interest,
				color: favcolor,
				image: image
			}
		});
		console.log(name, age, interest, favcolor);
	},
	removeFriend: async (event) => {
		const form = await event.request.formData();
		const friend = form.get('friend');
		await db.friend.delete({
			where: { id: Number(friend) }
		});
	}
};

export async function load() {
	const friends = await db.friend.findMany();

	return {
		friends: friends
	};
}
