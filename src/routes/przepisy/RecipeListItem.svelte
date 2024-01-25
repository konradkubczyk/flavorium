<script lang="ts">
	// eslint-disable-next-line
	export let recipe: any;
</script>

<a
	id="recipe-list-item"
	href={`/przepis/${recipe.$id}`}
	class="flex flex-col gap-5 bg-slate-100 rounded-lg px-5 py-3 text-left hover:bg-slate-200/75 transition-colors"
	draggable="false"
>
	<h2 class="text-xl font-semibold">{recipe.name}</h2>
	<p>{recipe.description}</p>
	<div class="flex flex-col md:flex-row justify-between">
		<div class="flex flex-col sm:flex-row gap-x-3 flex-wrap">
			<div class="whitespace-nowrap">
				<span>Poziom trudności:</span>
				<span class="font-bold">{recipe.difficulty}/3</span>
			</div>
			<div class="whitespace-nowrap">
				<span>Czas przygotowania:</span>
				<span class="font-bold">{recipe.time} min</span>
			</div>
			<div class="whitespace-nowrap">
				<span>Porcje:</span>
				<span class="font-bold">{recipe.servings}</span>
			</div>
		</div>
		<div class="flex gap-5 flex-wrap flex-col justify-end">
			<div class="whitespace-nowrap">
				<span>Dodano:</span>
				<span class="font-bold"
					>{new Date(recipe.$createdAt).getDate()}/{new Date(recipe.$createdAt).getMonth() +
						1}/{new Date(recipe.$createdAt).getFullYear()}</span
				>
			</div>
		</div>
	</div>
</a>
