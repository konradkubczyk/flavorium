<script lang="ts">
	import RecipeListItem from './RecipeListItem.svelte';

	export let data;
</script>

<svelte:head>
	<title>Lista przepisów</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="container mx-auto">
	<div class="text-center mt-7 mb-10">
		<h1 class="text-3xl font-bold">Lista przepisów</h1>
		<p class="mt-5">
			Tu znajdziesz listę wszystkich przepisów przesłanych przez innych internautów.
		</p>
	</div>
	<div class="flex flex-col gap-5">
		{#each data.recipes as recipe}
			<RecipeListItem {recipe}></RecipeListItem>
		{/each}
	</div>
</div>
