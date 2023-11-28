<script lang="ts">
	//	import Counter from './Counter.svelte';
	//	import welcome from '$lib/images/svelte-welcome.webp';
	//	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import { recipeData, handleSubmit } from './submit-data';
</script>

<svelte:head>
	<title>Dodaj przepis</title>
	<meta name="description" content="Strona dodawania przepisu" />
</svelte:head>

<div class="container max-w-md mx-auto bg-gray-200 p-4 rounded-lg">
	<form id="recipe-form" class="flex flex-col gap-5" on:submit|preventDefault={handleSubmit}>
		<div class="flex flex-col gap-2">

				<label for="name">Nazwa przepisu</label>
				<input
					class="form-control border-2 border-gray-300 bg-gray-100 text-gray-800 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-800 focus:border-yellow-800"
					id="name"
					required
					placeholder="Tosty z czekoladą..."
					bind:value={recipeData.name}
				/>

		</div>
		<div class="border-t border-gray-300 my-1"></div>
		<div class="flex flex-col gap-2">
			<label for="description">Opis</label>
			<textarea
				class="form-control border-2 border-gray-300 bg-gray-100 text-gray-800 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-800 focus:border-yellow-800"
				id="description"
				rows="3"
				placeholder="Pyszne tosty, które zrobiłem wczoraj..."
				bind:value={recipeData.description}
				required
			></textarea>
		</div>
		<div class="border-t border-gray-300 my-1"></div>
		<div>
			<label for="typeSelect">Wybierz Rodzaj</label>
			<select 
				class="block w-full p-3 bg-gray-100 text-gray-800 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-800 focus:border-yellow-800"
				id="typeSelect" 
				bind:value={recipeData.type} 
				required>
				<option disabled selected value="">Wybierz</option>
				<option value="food">jedzenie</option>
				<option value="drink">napój</option>
			</select>
		</div>
		<div class="border-t border-gray-300 my-1"></div>
		<div>
			<label for="subTypeSelect">Wybierz</label>
			<select 
			class="block w-full p-3 bg-gray-100 text-gray-800 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-800 focus:border-yellow-800"
			id="subTypeSelect" 
			bind:value={recipeData.subType}>
				{#if recipeData.type == 'drink'}
					<option disabled selected value="">Wybierz typ napoju</option>
					<option value="hotDrink">Ciepły napój</option>
					<option value="coldDrink">Napój</option>
					<option value="alcoholicDrink">Napój z alkoholem</option>
				{:else if recipeData.type == 'food'}
					<option disabled selected value="">Wybierz typ potrawy</option>
					<option value="pasta">Makaron</option>
					<option value="soup">Zupa</option>
					<option value="pastery">Pieczywo</option>
				{:else}
					<option disabled selected value="">Wybierz rodzaj powyżej</option>
				{/if}
			</select>
		</div>
		<div class="border-t border-gray-300 my-1"></div>
		<div class="">
			<input 
			class="form-checkbox accent-yellow-800"
			id="isVeganCheckbox" 
			type="checkbox" 
			bind:checked={recipeData.isVegan} />
			<label for="isVeganCheckbox">Czy przepis jest wegański?</label>
		</div>
		<div class="border-t border-gray-300 my-1"></div>
		<button class="font-semibold text-yellow-800 aria-[current='page']:bg-yellow-100 hover:bg-yellow-100 rounded-lg transition duration-200 select-nones" id="submitRecipeButton" type="submit">Dodaj przepis</button>
	</form>
</div>
