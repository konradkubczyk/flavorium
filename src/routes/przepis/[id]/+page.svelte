<script lang="ts">
	export let data;
</script>

<div class="container mx-auto">
	<div class="flex justify-between items-center my-20">
		<div>
			<h1 class="text-3xl">{data.recipe.name}</h1>
			<span class="mt-1 flex items-center gap-2 uppercase tracking-widest text-sm text-gray-500">
				{data.recipe.category}
				<span class="text-xs">/</span>
				{data.recipe.subcategory}
			</span>
		</div>
		<div class="flex gap-5 flex-wrap text-right items-center">
			<div class="flex flex-col">
				<span class="uppercase tracking-widest text-xs text-gray-500">poziom trudności</span>
				<span class="text-2xl">{data.recipe.difficulty}/3</span>
			</div>
			<div class="border-r border-gray-300 h-10"></div>
			<div class="flex flex-col">
				<span class="uppercase tracking-widest text-xs text-gray-500">czas przygotowania</span>
				<span class="text-2xl">{data.recipe.time} min</span>
			</div>
			<div class="border-r border-gray-300 h-10"></div>
			<div class="flex flex-col">
				<span class="uppercase tracking-widest text-xs text-gray-500">porcje</span>
				<span class="text-2xl">{data.recipe.servings}</span>
			</div>
		</div>
	</div>
	<div class="grid grid-cols-3 gap-5">
		<div class="rounded-lg p-5 bg-yellow-50 text-yellow-950 col-span-1">
			<h2 class="text-xl">Składniki</h2>
			<ul class="mt-5 flex flex-col gap-3">
				{#each data.recipe.ingredients as ingredient}
					<li class="flex justify-between border-b border-dotted border-b-yellow-800 py-2">
						<span>{ingredient.name}</span>
						<span>{ingredient.quantity} {ingredient.unit}</span>
					</li>
				{/each}
			</ul>
		</div>
		<div class="rounded-lg p-5 bg-teal-50 text-teal-950 col-span-2">
			<h2 class="text-xl">Opis</h2>
			<p class="mt-5">{data.recipe.description}</p>
		</div>
	</div>

	<h2 class="mt-10 text-xl">Sposób przygotowania</h2>

	<div class="mt-5 flex flex-col gap-5">
		{#each data.recipe.steps as step, index}
			<div class="border-l-2 border-emerald-600 pl-5">
				<h3 class="text-lg">Krok {index + 1}</h3>
				<p class="mt-5">{step.description}</p>
			</div>
		{/each}
	</div>
</div>
