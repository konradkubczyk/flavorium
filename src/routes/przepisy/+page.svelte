<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="container mx-auto">
	<div class="text-center my-20">
		<h1 class="text-3xl">Lista przepisów</h1>
		<p class="mt-5">
			Tu znajdziesz listę wszystkich przepisów przesłanych przez innych internautów.
		</p>
	</div>
	<div class="flex flex-col gap-5">
		{#each data.recipes as recipe}
			<button
				on:click={() => window.location.href = `/przepis/${recipe.$id}`}
				class="flex flex-col gap-5 bg-slate-100 rounded-lg p-5 text-left hover:bg-slate-200/75 transition-colors"
			>
				<h2 class="text-xl">{recipe.name}</h2>
				<p>{recipe.description}</p>
				<div class="flex gap-5 flex-wrap">
					<div class="whitespace-nowrap">
						<span class="font-bold">Poziom trudności:</span>
						<span>{recipe.difficulty}/3</span>
					</div>
					<div class="whitespace-nowrap">
						<span class="font-bold">Czas przygotowania:</span>
						<span>{recipe.time} min</span>
					</div>
					<div class="whitespace-nowrap">
						<span class="font-bold">Porcje:</span>
						<span>{recipe.servings}</span>
					</div>
				</div>
			</button>
		{/each}
	</div>
</div>
