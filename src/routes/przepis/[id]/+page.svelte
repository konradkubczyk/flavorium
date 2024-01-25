<script lang="ts">
	import Reviews from './Reviews.svelte';
	import Description from './Description.svelte';
	import Ingredients from './Ingredients.svelte';
	import RecipeParams from './RecipeParams.svelte';

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
</script>

<div class="container mx-auto">
	<div
		class="flex items-center my-20 flex-col justify-center md:flex-row md:justify-between gap-10"
	>
		<div class="flex flex-col-reverse md:flex-col">
			<h1 class="text-3xl font-bold text-center md:text-left">{data.recipe.name}</h1>
			<span
				class="mt-1 flex items-center gap-2 uppercase tracking-widest text-sm text-gray-500 justify-center md:justify-start"
			>
				{data.recipe.category}
				<span class="text-xs">/</span>
				{data.recipe.subcategory}
			</span>
		</div>
		<RecipeParams recipe={data.recipe}></RecipeParams>
	</div>
	<div class="flex flex-col md:flex-row gap-3">
		<Ingredients recipe={data.recipe}></Ingredients>
		<Description description={data.recipe.description}></Description>
	</div>

	<h2 class="mt-10 text-xl font-semibold">Sposób przygotowania</h2>

	<div class="mt-5 flex flex-col gap-5">
		{#each data.recipe.steps as step, index}
			<div class="border-l-2 border-emerald-600 pl-5">
				<h3 class="text-lg">Krok {index + 1}</h3>
				<p>{step.description}</p>
			</div>
		{/each}
	</div>

	{#if data.recipe.$permissions.includes(`delete("user:${$account.id}")`)}
		<button
			class="mt-10 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
			on:click={() => deleteRecipe(data.recipe.$id)}
		>
			Usuń
		</button>
	{/if}

	<hr class="mt-14" />

	<Reviews></Reviews>
</div>
