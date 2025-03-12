<script lang="ts">
	export let data;
	const friends = data.friends;
</script>

<h1 class="text-3xl font-bold underline text-center">Friends</h1>

<form
	class="bg-slate-300 flex flex-col gap-4 p-4 border-purple-700 border rounded-md m-2 place-content-center"
	method="POST"
	action="?/addFriend"
>
	<input name="name" required />
	<input name="age" type="number" required />
	<select name="interest" required>
		<option value="">Select interest</option>
		<option value="sport">Sport</option>
		<option value="music">Music</option>
		<option value="programming">Programming</option>
		<option value="sirov burek">Sirov burek</option>
		<option value="mesni burek">Mesni burek</option>
	</select>
	<button type="submit" class="bg-purple-400 border border-purple-800 rounded-lg"
		>Dodaj prijatelja</button
	>
</form>

<div class="grid grid-cols-3 p-4 bg-slate-300 gap-4">
	{#each friends as f}
		<div class="bg-stone-400 rounded-md">
			<div class="text-lg font-bold p-1">#{f.id} {f.name} ({f.age})</div>
			<div class="p-1">{f.interest}</div>
		</div>
	{/each}
</div>
