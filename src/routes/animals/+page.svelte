<script lang="ts">
	export let data;
	const animal = data.animals;
</script>

<h1 class="text-3xl font-bold underline text-center">animal</h1>

<form
	class="bg-slate-300 flex flex-col gap-4 p-4 border-purple-700 border rounded-md m-2 place-content-center"
	method="POST"
	action="?/addAnimal"
>
	<div>
		<h2>Name</h2>
		<input name="name" required />
	</div>
	<div>
		<h2>Danger level</h2>
		<input name="dangerLevel" type="number" required />
	</div>

	<div>
		<h2>Is cute</h2>
		<input name="isCute" type="checkbox" class="size-8" required />
	</div>

	<button type="submit" class="bg-purple-400 border border-purple-800 rounded-lg">Add animal</button
	>
</form>

<div class="grid grid-cols-3 p-4 bg-slate-300 gap-4">
	{#each animal as a}
		<div class="bg-stone-400 rounded-md">
			<div class="text-lg font-bold p-1">
				#{a.id}
				{a.name} ({a.isCute}) (Danger level: {a.dangerLevel})
			</div>
		</div>
	{/each}
</div>
