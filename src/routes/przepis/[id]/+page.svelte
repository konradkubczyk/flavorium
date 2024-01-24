<script lang="ts">
	import { account } from '$lib/stores/account.ts';
	import { goto } from '$app/navigation';

	export let data;

	async function deleteRecipe(id: string) {
		const res = await fetch(
			`https://cloud.appwrite.io/v1/databases/655bd832ea6f472b15d8/collections/655bd852b4a5ec1fd409/documents/${id}`,
			{
				method: 'DELETE',
				credentials: 'include',
				headers: {
					'Content-Type': 'application/json',
					'X-Appwrite-Project': '6556209062be5c6ce4b0'
				}
			}
		);
		if (!res.ok) {
			alert('Wystąpił błąd podczas usuwania przepisu.');
			return;
		}
		alert('Przepis został usunięty.');
		goto('/przepisy');
	}

	class Comment {
		author?: string;
		text?: string;
		score?: string;
	}

	const commentData = new Comment();
	let allComments: Comment[] = [];

	function handleSubmit() {
		let singleComment = structuredClone(commentData);
		allComments = [...allComments, { ...singleComment }];
		console.log(allComments);
	}
</script>

<div class="container mx-auto">
	<div class="flex items-center my-20 flex-col justify-center text-center md:flex-row md:justify-between md:text-left">
		<div>
			<h1 class="text-3xl font-bold">{data.recipe.name}</h1>
			<span class="mt-1 flex items-center gap-2 uppercase tracking-widest text-sm text-gray-500">
				{data.recipe.category}
				<span class="text-xs">/</span>
				{data.recipe.subcategory}
			</span>
		</div>
		<div class="flex gap-5 flex-wrap text-center md:text-right items-center mt-6 md:mt-0">
			<div class="flex flex-col">
				<span class="uppercase tracking-widest text-xs text-gray-500">Poziom trudności</span>
				<span class="text-2xl">{data.recipe.difficulty}/3</span>
			</div>
			<div class="border-r border-gray-300 h-10"></div>
			<div class="flex flex-col">
				<span class="uppercase tracking-widest text-xs text-gray-500">Czas przygotowania</span>
				<span class="text-2xl">{data.recipe.time} min</span>
			</div>
			<div class="border-r border-gray-300 h-10"></div>
			<div class="flex flex-col">
				<span class="uppercase tracking-widest text-xs text-gray-500">Porcje</span>
				<span class="text-2xl">{data.recipe.servings}</span>
			</div>
		</div>
	</div>
	<div class="flex flex-col md:flex-row gap-3">
		<div class="rounded-lg p-5 bg-yellow-50 text-yellow-950 md:w-1/3">
			<h2 class="text-xl font-semibold">Składniki</h2>
			<ul class="mt-5 flex flex-col gap-3">
				{#each data.recipe.ingredients as ingredient}
					<li class="flex justify-between border-b border-dotted border-b-yellow-800 py-2">
						<span>{ingredient.name}</span>
						<span>{ingredient.quantity} {ingredient.unit}</span>
					</li>
				{/each}
			</ul>
		</div>
		<div class="rounded-lg p-5 bg-teal-50 text-teal-950 w-full">
			<h2 class="text-xl font-semibold">Opis</h2>
			<p class="mt-5">{data.recipe.description}</p>
		</div>
	</div>

	<h2 class="mt-10 text-xl font-semibold">Sposób przygotowania</h2>

	<div class="mt-5 flex flex-col gap-3">
		{#each data.recipe.steps as step, index}
			<div class="border-l-2 border-emerald-600 pl-5">
				<h3 class="text-lg">Krok {index + 1}</h3>
				<p class="mt-5">{step.description}</p>
			</div>
		{/each}
	</div>

	{#if data.recipe.$permissions.includes(`delete("user:${$account.id}")`) }
		<button class="mt-10 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
						on:click={() => deleteRecipe(data.recipe.$id)}>
			Usuń
		</button>
	{/if}

	<div id="commentSection" class="mt-10">
		<h2 class="mb-4 text-2xl font-semibold">
			Opinie
		</h2>
		<div id="comments-counter" class="mb-4 text-lg">Liczba opinii: {allComments.length}</div>
		<form id="addComment" on:submit|preventDefault={handleSubmit} class="mb-4">
    <textarea
			id="commentText"
			class="w-full border-2 border-gray-200 p-3 rounded-lg outline-none focus:border-blue-600"
			bind:value={commentData.text}
			placeholder="Dodaj komentarz..."
			required
		></textarea>

			<div class="flex items-center justify-between mt-2 space-x-2">
				<div>
					{#each [1, 2, 3, 4, 5] as rating}
						<input type="radio" name="rating" value={rating} bind:group={commentData.score} id={`star${rating}`}
									 class="hidden" />
						<label for={`star${rating}`} class="text-xl cursor-pointer text-blue-600">
							{#if commentData.score >= rating}
								&#9733; <!-- Highlighted star -->
							{:else}
								&#9734; <!-- Unhighlighted star -->
							{/if}
						</label>
					{/each}
				</div>

				<button type="submit"
								class="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition disabled:opacity-50 disabled:hover:bg-blue-600 disabled:cursor-not-allowed">
					Dodaj Komentarz
				</button>
			</div>
		</form>

		<div id="comments">
			{#each allComments as singularComment}
				<div class="mb-4 p-4 border border-blue-gray-200 rounded">
					<p class="text-blue-gray-700 mb-2">{singularComment.text}</p>
					<p class="text-blue-gray-500">{singularComment.score}/5</p>
				</div>
			{/each}
		</div>
	</div>


</div>
