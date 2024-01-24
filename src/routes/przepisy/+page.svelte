<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>Lista przepisów</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="container mx-auto">
	<div class="text-center my-10">
		<h1 class="text-3xl font-bold">Lista przepisów</h1>
		<p class="mt-5">
			Tu znajdziesz listę wszystkich przepisów przesłanych przez innych internautów.
		</p>
	</div>
	<div class="flex flex-col gap-5">
		{#each data.recipes as recipe}
			<a
				href={`/przepis/${recipe.$id}`}
				class="flex flex-col gap-5 bg-slate-100 rounded-lg p-5 text-left hover:bg-slate-200/75 transition-colors"
			>
				<h2 class="text-xl">{recipe.name}</h2>
				<p>{recipe.description}</p>
				<div class="flex justify-between">
					<div class="flex gap-5 flex-wrap">
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
					<div class="flex gap-5 flex-wrap">
						<div class="whitespace-nowrap">
							<span>Dodano:</span>
							<span class="font-bold">{new Date(recipe.$createdAt).getDate()}/{new Date(recipe.$createdAt).getMonth() + 1}/{new Date(recipe.$createdAt).getFullYear()}</span>
						</div>
					</div>
				</div>
			</a>
		{/each}
	</div>
</div>
