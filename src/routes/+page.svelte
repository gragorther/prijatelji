<script lang="ts">
	import { User } from 'lucide-svelte';
	export let data;
	const friends = data.friends;

	let selectedFile: File | null = null;
	let base64Image: string | null = null;

	async function handleFileChange(event: Event) {
		const fileInput = event.target as HTMLInputElement;
		if (fileInput.files && fileInput.files.length > 0) {
			selectedFile = fileInput.files[0];
			base64Image = await fileToBase64(selectedFile);
		}
	}

	function fileToBase64(file: File): Promise<string> {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => resolve(reader.result as string);
			reader.onerror = (error) => reject(error);
		});
	}
</script>

<h1 class="text-3xl font-bold underline text-center">Friends</h1>

<form
	class="bg-slate-300 flex flex-col gap-4 p-4 border-purple-700 border rounded-md m-2 place-content-center"
	method="POST"
	action="?/addFriend"
>
	<div>
		<h2>Name</h2>
		<input name="name" required />
	</div>
	<div>
		<h2>Age</h2>
		<input name="age" type="number" required />
	</div>
	<select name="interest" required>
		<option value="">Select interest</option>
		<option value="sport">Sport</option>
		<option value="music">Music</option>
		<option value="programming">Programming</option>
		<option value="sirov burek">Sirov burek</option>
		<option value="mesni burek">Mesni burek</option>
	</select>
	<label for="favcolor">Select color:</label>
	<input type="color" id="favcolor" name="favcolor" value="#ff0000" required />
	<input type="file" on:change={handleFileChange} />
	<input type="hidden" value={base64Image} name="image" />
	<button type="submit" class="bg-purple-400 border border-purple-800 rounded-lg"
		>Dodaj prijatelja</button
	>
</form>
<form
	class="bg-slate-300 flex flex-col gap-4 p-4 border-purple-700 border rounded-md m-2 place-content-center"
	method="POST"
	action="?/removeFriend"
>
	<select name="friend">
		{#each friends as friend}
			<option value={friend.id}>{friend.name}</option>
		{/each}
	</select>
	<button type="submit" class="bg-purple-400 border border-purple-800 rounded-lg"
		>Odstrani prijatelja</button
	>
</form>

<div class="grid grid-cols-3 p-4 bg-slate-300 gap-4">
	{#each friends as f}
		<div class="bg-stone-400 rounded-md" style="background-color:{f.color}">
			<div class="text-lg font-bold p-1">#{f.id} {f.name} ({f.age})</div>
			<div class="p-1">{f.interest}</div>
			<div class="p-1">Created at: {f.timestamp}</div>
			{#if f.image}
				<img src={f.image} alt={f.name} />
			{:else}
				<User size="10rem" />
			{/if}
		</div>
	{/each}
</div>
