<script lang="ts">
	import { recipeStore } from '../stores.ts';
	import type { Recipe } from './dodaj-przepis/submit-data.ts';
	let numberOfRecipesShown = 2;

	// I love TS syntax 
	let recomendedRecipes: Recipe[] = [];

	while (
		numberOfRecipesShown > recomendedRecipes.length &&
		$recipeStore.length >= numberOfRecipesShown
	) {
		// Get a random number between 0 and the last index of recipeStore
		let randomRecipeIndex = Math.floor(Math.random() * $recipeStore.length);
		console.log(randomRecipeIndex);
		let currentRecipeInArray = 0;

		$recipeStore.forEach((recipe) => {
			//This checks if a  random recipe is already included in recomended
			if (currentRecipeInArray == randomRecipeIndex && !recomendedRecipes.includes(recipe)) {
				console.log(recipe.name);
				recomendedRecipes.push(recipe);
			}
			currentRecipeInArray++;
		});
	}

	//	import Counter from './Counter.svelte';
	//	import welcome from '$lib/images/svelte-welcome.webp';
	//	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import placeholder from '$lib/images/placementpreview.jpg';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Home Page" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<h2>Witam na stronie z przepisami</h2>

			<!----<picture>
				<img src={placeholder} alt="Placeholder" />
			</picture>
			!-->
		</span>
	</h1>
</section>
<section>
	<div id="recommended">
		{#if recomendedRecipes.length > 0}
			{#each recomendedRecipes as exampleRecipe}
				<p>{exampleRecipe.name}</p>
				<br />
				<br />
				<br />
			{/each}
		{/if}
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}
</style>
