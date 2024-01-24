<script lang="ts">
	import { goto } from '$app/navigation';

	// eslint-disable-next-line
	export let recommendedRecipe: any;
</script>

<a
	href="/przepis/{recommendedRecipe['$id']}"
	on:click={() => goto(`/przepis/${recommendedRecipe['$id']}`)}
	class="px-5 py-3 rounded-xl bg-gradient-to-br from-cyan-700/10 to-sky-50 hover:bg-slate-200/75 transition-all duration-300 flex flex-col max-h-64"
	style="overflow-wrap: anywhere;"
>
	<h3 class="text-sky-900 text-2xl font-semibold">{recommendedRecipe['name']}</h3>
	<p class="text-sky-900 mt-3 overflow-hidden">
		{recommendedRecipe['description'].length > 250
			? recommendedRecipe['description'].substring(0, 250).trim() + '...'
			: recommendedRecipe['description']}
	</p>
</a>
