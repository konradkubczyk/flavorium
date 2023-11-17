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

<div class="container max-w-md mx-auto">
	<form id="recipe-form" class="flex flex-col gap-5" on:submit|preventDefault={handleSubmit}>
		<div class="flex flex-col gap-2">
			<label for="name">Nazwa przepisu</label>
			<input
				class="form-control"
				id="name"
				required
				placeholder="Tosty z czekoladą..."
				bind:value={recipeData.name}
			/>
		</div>

		<div class="flex flex-col gap-2">
			<label for="description">Opis</label>
			<textarea
				class="form-control"
				id="description"
				rows="3"
				placeholder="Pyszne tosty, które zrobiłem wczoraj..."
				bind:value={recipeData.description}
				required
			></textarea>
		</div>
		<div>
			<label for="typeSelect">Wybierz Rodzaj</label>
			<select id="typeSelect" bind:value={recipeData.type} required>
				<option disabled selected value="">Wybierz </option>
				<option value="food">jedzenie</option>
				<option value="drink">napój</option>
			</select>
		</div>
		<div>
			<label for="subtype">Wybierz</label>
			<select id="subtype" bind:value={recipeData.subType} required>
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
		<div>
			<input id="isVegan" type="checkbox" bind:checked={recipeData.isVegan} />
			<label for="isVegan">Czy przepis jest wegański?</label>
		</div>
		<button type="submit" on:submit={handleSubmit}>Dodaj przepis</button>
	</form>
</div>
