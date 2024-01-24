<script lang="ts">


	// TODO: Add a new way of getting random recipes

	import { goto } from '$app/navigation';

	export let data;
	console.log(data.recipes.length);

	let numberOfRecipesShown = 3;
	//
	// // I love TS syntax
	let recommendedRecipes = [];
	//
	//while (
	//	numberOfRecipesShown > recommendedRecipes.length &&
	// 	$recipeStore.length >= numberOfRecipesShown
	// ) {
	// 	// Get a random number between 0 and the last index of recipeStore
	// 	let randomRecipeIndex = Math.floor(Math.random() * $recipeStore.length);
	// 	console.log(randomRecipeIndex);
	// 	let currentRecipeInArray = 0;
	//
	// 	$recipeStore.forEach((recipe) => {
	// 		//This checks if a  random recipe is already included in recommended
	// 		if (currentRecipeInArray == randomRecipeIndex && !recommendedRecipes.includes(recipe)) {
	// 			console.log(recipe.name);
	// 			recommendedRecipes.push(recipe);
	// 		}
	// 		currentRecipeInArray++;
	// 	});
	//}


	while (
		numberOfRecipesShown > recommendedRecipes.length &&
		data.recipes.length >= numberOfRecipesShown
		) {

		let randomRecipeIndex = Math.floor(Math.random() * data.recipes.length);
		console.log(randomRecipeIndex);
		let currentRecipeInArray = 0;

		data.recipes.forEach((recipe) => {
			//This checks if a  random recipe is already included in recommended
			if (currentRecipeInArray == randomRecipeIndex && !recommendedRecipes.includes(recipe)) {
				console.log(recipe.name);
				recommendedRecipes.push(recipe);
			}
			currentRecipeInArray++;
		});
	}
</script>

<svelte:head>
	<title>Strona główna</title>
	<meta name="description" content="Strona główna" />
</svelte:head>

<section class="container mx-auto flex-1 flex">
	<div
		class="bg-center bg-cover rounded-3xl overflow-hidden flex-1"
		style="background-image: url('/sam-moghadam-khamseh-yxZSAjyToP4-unsplash.jpg');"
	>
		<div class="p-10 bg-cyan-950/75 h-full flex flex-col justify-center">
			<h1 class="text-cyan-50 text-7xl text-center">
				Poznaj <a
				href="/przepisy"
				class="underline decoration-cyan-700/50 hover:decoration-cyan-700 transition"
			>nowe inspiracje</a
			>,
				<br />
				<a
					href="/dodaj-przepis"
					class="underline decoration-cyan-700/50 hover:decoration-cyan-700 transition">dziel się</a
				> doświadczeniem
			</h1>
		</div>
	</div>
</section>
{#if recommendedRecipes.length > 0}
	<section class="container mx-auto mt-10">
		<h2 class="text-center text-3xl text-sky-950">Losowe przepisy</h2>
		<p class="text-center mt-2 text-sky-900">
			Sprawdź losowo wybrane przepisy spośród dodanych przez naszych użytkowników. Może znajdziesz
			coś dla siebie?
		</p>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 mt-10">
			{#each recommendedRecipes as recommendedRecipe}
				<a
					href="/przepis/{recommendedRecipe.$id}"
					on:click={() => goto(`/przepis/${recommendedRecipe.$id}`)}

					class="px-5 py-2 rounded-xl bg-gradient-to-br from-sky-800/10 to-sky-50 hover:bg-slate-200/75 transition-all duration-300 flex flex-col justify-end"
					style="overflow-wrap: anywhere;"
				>
					<div class="text-sky-900 text-2xl">{recommendedRecipe.name}</div>
					<div class="text-sky-900">{recommendedRecipe.description}</div>
				</a>
			{/each}
		</div>
	</section>
{/if}

