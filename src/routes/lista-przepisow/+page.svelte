<script lang="ts">
	import { recipeStore } from '../../stores.ts';
	import { test } from './test.ts';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="container">
	<div class="container max-w-md mx-auto">
		<h1>Lista przepisów, które przesłałeś</h1>
	{#each $recipeStore as recipe}
		<div class="recipe">
			<h3>{recipe.name}</h3>
			<p>{recipe.description}</p>
		</div>
	{/each}

	<button on:click={test}>Test</button>
	</div>
</div>
