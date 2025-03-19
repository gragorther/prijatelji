import db from '$lib/db';

export const actions = {
	addAnimal: async (event) => {
		const form = await event.request.formData();
		const name = String(form.get('name'));
		const isCute = Boolean(form.get('isCute'));
		const dangerLevel = Number(form.get('dangerLevel'));

		// Dodaj novega prijatelja v Bazo
		await db.animal.create({
			data: {
				name: name,
				isCute: isCute,
				dangerLevel: dangerLevel
			}
		});
	}
};

export async function load() {
	// SELECT * FROM animal
	const f = await db.animal.findMany();

	return {
		animals: f,
		najStevilo: 23
	};
}
