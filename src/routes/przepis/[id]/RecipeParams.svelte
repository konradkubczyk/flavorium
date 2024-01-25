<script lang="ts">
	import type { Recipe } from '$lib/models/recipe';

	export let recipe: Recipe;
</script>

<div class="flex flex-col md:flex-row gap-5 text-center md:text-right items-center mt-10 md:mt-0">
	<div class="flex flex-col">
		<span class="uppercase tracking-widest text-xs text-gray-500">Poziom trudności</span>
		<span class="text-2xl">{recipe.difficulty}/3</span>
	</div>
	<div class="hidden md:block border-r border-gray-300 h-10"></div>
	<div class="flex flex-col">
		<span class="uppercase tracking-widest text-xs text-gray-500">Czas przygotowania</span>
		<span class="text-2xl">{recipe.time} min</span>
	</div>
	<div class="hidden md:block border-r border-gray-300 h-10"></div>
	<div class="flex flex-col">
		<span class="uppercase tracking-widest text-xs text-gray-500">Porcje</span>
		<span class="text-2xl">{recipe.servings}</span>
	</div>
</div>
