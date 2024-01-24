<script lang="ts">
	import FeaturedRecipesItem from './FeaturedRecipesItem.svelte';

	export let data;

	let numberOfRecipesShown = 4;

	// eslint-disable-next-line
	let recommendedRecipes: any[] = [];

	while (
		numberOfRecipesShown > recommendedRecipes.length &&
		data.recipes.length >= numberOfRecipesShown
	) {
		let randomRecipeIndex = Math.floor(Math.random() * data.recipes.length);
		let currentRecipeInArray = 0;

		// eslint-disable-next-line
		data.recipes.forEach((recipe: any) => {
			//This checks if a  random recipe is already included in recommended
			if (currentRecipeInArray == randomRecipeIndex && !recommendedRecipes.includes(recipe)) {
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

<section class="container mx-auto mt-3 sm:mt-0">
	<div
		class="bg-center bg-cover rounded-3xl overflow-hidden"
		style="background-image: url('/sam-moghadam-khamseh-yxZSAjyToP4-unsplash.jpg');"
	>
		<div class="bg-cyan-950/75 h-full flex flex-col justify-center py-20 lg:py-64 px-5 lg:px-10">
			<h1 class="text-cyan-50 text-4xl lg:text-7xl font-bold lg:font-normal text-center">
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
	<section class="container mx-auto flex-1">
		<div class="py-9">
			<h2 class="text-center text-3xl text-sky-950 font-bold">Losowe przepisy</h2>
			<p class="text-center mt-2 text-sky-900">
				Sprawdź losowo wybrane przepisy spośród dodanych przez naszych użytkowników. Może znajdziesz
				coś dla siebie?
			</p>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
			{#each recommendedRecipes as recommendedRecipe}
				<FeaturedRecipesItem {recommendedRecipe}></FeaturedRecipesItem>
			{/each}
		</div>
	</section>
{/if}
