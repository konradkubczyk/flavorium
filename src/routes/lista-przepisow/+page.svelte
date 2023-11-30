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
		<h1 class="text-2xl font-semibold">Lista przepisów, które przesłałeś</h1>
	{#each $recipeStore as recipe}
	
		<div class="recipe">
			<div class="container m-4 p-4 rounded-lg bg-white border-black hover:bg-lime-100">
				<p id="recipeName" class="text-2xl font-semibold">Nazwa: {recipe.name}</p>
				<p id="recipeType" class="text-xl font-semibold">Typ: {recipe.type}</p>
				<p id="recipeSubtype" class="text-l font-semibold">Podtyp: {recipe.subType}</p>
				
				{#if recipe.isVegan==true}
				<p class="text-xs">Vegan friendly</p>
				{:else}
				<p class="text-xs">Not vegan friendly</p>	
				{/if}
			</div>
		</div>
		<div class="border-t border-gray-300 my-1"></div>
	{/each}

	<button on:click={test}>Test</button>
	</div>
</div>
