<script lang="ts">
	import type { Recipe } from '$lib/models/recipe';

	export let recipe: Recipe;
</script>

<div class="rounded-lg p-5 bg-yellow-50 text-yellow-950 md:w-1/3">
	<h2 class="text-xl font-semibold">Składniki</h2>
	<ul class="mt-3 flex flex-col gap-3">
		{#each recipe.ingredients as ingredient}
			<li class="flex justify-between border-b border-dotted border-b-yellow-800 py-2">
				<span>{ingredient.name}</span>
				<span>{ingredient.quantity} {ingredient.unit}</span>
			</li>
		{/each}
	</ul>
</div>
