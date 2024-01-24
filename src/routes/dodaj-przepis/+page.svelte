<script lang="ts">
	import { account } from '$lib/stores/account.ts';
	import { CategoryEnum, SubcategoryEnum, Unit } from '$lib/models/recipe.ts';
	import { isSubmitting, recipe, refreshArrays, submitRecipe } from './recipe.ts';

	// Observe changes in recipe and refresh arrays
	$: {
		recipe && refreshArrays();
	}
</script>

<svelte:head>
	<title>Dodaj przepis</title>
	<meta name="description" content="Strona dodawania przepisu" />
</svelte:head>

{#if $account.isLoggedIn}
	<section class="container mx-auto flex-1 flex flex-col max-w-2xl">
		<div class="text-center my-10">
			<h1 class="text-3xl">Dodaj przepis</h1>
		</div>
		<form on:submit|preventDefault={submitRecipe} class="flex flex-col gap-5 mx-auto">
			<div class="flex flex-col gap-2">
				<label for="name">Nazwa przepisu</label>
				<input
					class="w-full border-2 border-gray-200 p-3 rounded-lg outline-none focus:border-blue-600"
					id="name"
					required
					placeholder="Tosty z czekoladą..."
					bind:value={recipe.name}
					disabled={isSubmitting}
				/>
			</div>

			<div class="flex flex-col gap-2">
				<label for="description">Opis</label>
				<textarea
					class="w-full border-2 border-gray-200 p-3 rounded-lg outline-none focus:border-blue-600"
					id="description"
					rows="3"
					placeholder="Pyszne tosty, które zrobiłem wczoraj..."
					bind:value={recipe.description}
					required
					disabled={isSubmitting}
				></textarea>
			</div>

			<div class="flex flex-col gap-0">
				<label for="difficulty">Trudność</label>
				<input
					class="w-full border-2 border-gray-200 p-3 rounded-lg outline-none focus:border-blue-600"
					id="difficulty"
					type="range"
					min="1"
					max="3"
					placeholder="2"
					required
					bind:value={recipe.difficulty}
					disabled={isSubmitting}
				/>
			</div>

			<div class="flex flex-col gap-2">
				<label for="time">Czas przygotowania (w minutach)</label>
				<input
					class="w-full border-2 border-gray-200 p-3 rounded-lg outline-none focus:border-blue-600"
					id="time"
					type="number"
					min="0"
					max="1000"
					placeholder="30"
					required
					bind:value={recipe.time}
					disabled={isSubmitting}
				/>
			</div>

			<div class="flex flex-col gap-2">
				<label for="servings">Liczba porcji</label>
				<input
					class="w-full border-2 border-gray-200 p-3 rounded-lg outline-none focus:border-blue-600"
					id="servings"
					type="number"
					min="1"
					max="100"
					placeholder="2"
					required
					bind:value={recipe.servings}
					disabled={isSubmitting}
				/>
			</div>

			<div class="flex flex-col gap-2">
				<label for="ingredients">Składniki</label>

				{#each recipe.ingredients as ingredient, i}
					<div class="flex flex-row gap-2">
						<input
							class="w-full border-2 border-gray-200 p-3 rounded-lg outline-none focus:border-blue-600"
							id="ingredient-name-{i}"
							type="text"
							placeholder="mąka"
							required={recipe.ingredients.length === 1}
							bind:value={ingredient.name}
							disabled={isSubmitting}
						/>
						<input
							class="w-full border-2 border-gray-200 p-3 rounded-lg outline-none focus:border-blue-600"
							id="ingredient-quantity-{i}"
							type="number"
							min="0"
							max="1000"
							placeholder="25"
							required={ingredient.name !== null}
							bind:value={ingredient.quantity}
							disabled={isSubmitting}
						/>
						<select
							class="w-full border-2 border-gray-200 p-3 rounded-lg outline-none focus:border-blue-600"
							id="ingredient-unit-{i}"
							required={ingredient.quantity !== null}
							bind:value={ingredient.unit}
							disabled={isSubmitting}
						>
							<option disabled selected value="">Wybierz jednostkę</option>
							{#each Object.keys(Unit).filter(unit => isNaN(Number(unit))) as unit}
								<option value={unit}>{unit}</option>
							{/each}
						</select>
					</div>
				{/each}
			</div>

			<div class="flex flex-col gap-2">
				<label for="steps">Kroki</label>

				{#each recipe.steps as step, i}
					<div class="flex flex-row gap-2">
						<textarea
							class="w-full border-2 border-gray-200 p-3 rounded-lg outline-none focus:border-blue-600"
							id="step-description-{i}"
							rows="3"
							placeholder="Wymieszaj mąkę z wodą..."
							required={recipe.steps.length === 1}
							bind:value={step.description}
							maxlength="1000"
							disabled={isSubmitting}
						></textarea>
					</div>
				{/each}
			</div>

			<div class="flex flex-col gap-2">
				<label for="category">Kategoria</label>
				<select
					class="w-full border-2 border-gray-200 p-3 rounded-lg outline-none focus:border-blue-600"
					id="category"
					bind:value={recipe.category}
					required
					disabled={isSubmitting}
				>
					<option disabled selected value="">Wybierz kategorię</option>
					{#each Object.keys(CategoryEnum).filter(category => isNaN(Number(category))) as category}
						<option value={category}>{category}</option>
					{/each}
				</select>
			</div>

			{#if recipe.category !== ''}
				<div class="flex flex-col gap-2">
					<label for="subcategory">Podkategoria</label>
					<select
						class="w-full border-2 border-gray-200 p-3 rounded-lg outline-none focus:border-blue-600"
						id="subcategory"
						bind:value={recipe.subcategory}
						required
						disabled={isSubmitting}
					>
						<option disabled selected value="">Wybierz podkategorię</option>
						{#each Object.keys(SubcategoryEnum).filter(subcategory => isNaN(Number(subcategory))) as subcategory}
							<option value={subcategory}>{subcategory}</option>
						{/each}
					</select>
				</div>
			{/if}

			<div class="flex flex-col gap-2">
				<p>Diety</p>
				<div class="flex gap-2">
					<input
						id="is-vegetarian"
						type="checkbox"
						bind:checked={recipe.is_vegetarian}
						disabled={recipe.is_vegan || isSubmitting}
					/>
					<label for="is-vegetarian">Danie wegetariańskie</label>
				</div>
				{#if recipe.is_vegetarian}
					<div class="flex gap-2">
						<input
							id="is-vegan"
							type="checkbox"
							bind:checked={recipe.is_vegan}
							disabled={isSubmitting}
						/>
						<label for="is-vegan">Danie wegańskie</label>
					</div>
				{/if}
			</div>

			<button type="submit"
							class="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition disabled:opacity-50 disabled:hover:bg-blue-600 disabled:cursor-not-allowed"
							disabled={isSubmitting}
			>
				{#if isSubmitting}
					<p>Przesyłanie...</p>
				{:else}
					<p>Dodaj przepis</p>
				{/if}
			</button>
		</form>
	</section>
{:else}
	<section class="container mx-auto flex-1 flex flex-col justify-center">
		<span class="text-xl text-center">
			<a
				href="/konto"
				class="text-blue-600 hover:text-blue-700 active:text-blue-800 transition"
			>
				Zaloguj się
			</a>
			aby dodać przepis.
		</span>
	</section>
{/if}
