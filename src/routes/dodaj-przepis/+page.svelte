<script>
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
			></textarea>
		</div>
		<!-- <div class="form-group">
			<label for="nip">NIP</label>
			<input class="form-control" id="nip" required placeholder="NIP" />
		</div>
		<div class="form-group">
			<label for="city">Miasto</label>
			<input class="form-control" id="city" required placeholder="enter your email" />
		</div>
		<div class="form-group">
			<label for="street">Ulica</label>
			<input id="street" required placeholder="enter your email" />
		</div>
		<div class="form-group">
			<label for="house-number">Numer domu </label>
			<input id="house-number" required placeholder="enter your email" />
		</div>
		<div class="form-group">
			<label for="flat-number">Numer mieszkania </label>
			<input id="flat-number" placeholder="enter your email" />
		</div>
		<div class="form-group">
			<label for="postal-code">Kod pocztowy</label>
			<input id="postal-code" required placeholder="enter your email" />
		</div>
		<div class="form-group">
			<label for="exampleFormControlTextarea1">Uwagi</label>
			<textarea class="form-control" id="exampleFormControlTextarea1" rows="3" cols="1"></textarea>
		</div>
		<div class="form-group">
			<label for="exampleFormControlSelect2">Wybierz swoja branze z poniższej listy</label>
			<select id="industry" class="custom-select my-1 mr-sm-2">
				<option value="1">Budowlanka</option>
				<option value="2">Konserwacja powierzchni płaskich</option>
				<option value="3">Usługi</option>
				<option value="4">Beuty</option>
				<option value="5">Edukacja</option>
			</select>
		</div>
		<div class="custom-control custom-checkbox my-1 mr-sm-2">
			<input id="active" type="checkbox" class="custom-control-input" />
			<label class="custom-control-label" for="customControlInline">Aktywny</label>
		</div> -->
		<button type="submit">
            Dodaj przepis
        </button>
	</form>
</div>

