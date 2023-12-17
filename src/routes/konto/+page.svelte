<script lang="ts">

	interface Credentials {
		name: string;
		email: string;
		password: string;
	}

	let credentials: Credentials = {
		name: '',
		email: '',
		password: ''
	};

	let processing = false;
	let accountCreationMode = false;
	let accountCreatedSuccessfully = false;

	interface autherror {
		errorOccured: boolean;
		message: string;
	}

	let autherror: autherror = {
		errorOccured: false,
		message: ''
	};

	async function login() {
		accountCreatedSuccessfully = false;
		processing = true;
		autherror.errorOccured = false;
		const res = await fetch(
			'https://cloud.appwrite.io/v1/account/sessions/email',
			{
				headers: {
					Host: 'cloud.appwrite.io',
					'Content-Type': 'application/json',
					'X-Appwrite-Project': '6556209062be5c6ce4b0'
				},
				method: 'POST',
				body: JSON.stringify({
					email: credentials.email,
					password: credentials.password
				})
			}
		);
		processing = false;
		if (res.status === 201) {
			const data = await res.json();
		} else if (res.status === 401) {
			autherror.errorOccured = true;
			autherror.message = 'Nieprawidłowy email lub hasło.';
		} else if (res.status === 429) {
			autherror.errorOccured = true;
			autherror.message = 'Zbyt wiele prób logowania. Spróbuj ponownie później.';
		} else {
			autherror.errorOccured = true;
			autherror.message = 'Wystąpił błąd. Upewnij się, że wybrane hasło jest bezpieczne.';
		}
	}

	async function register() {
		accountCreatedSuccessfully = false;
		processing = true;
		autherror.errorOccured = false;
		const res = await fetch(
			'https://cloud.appwrite.io/v1/account',
			{
				headers: {
					'Content-Type': 'application/json',
					'X-Appwrite-Project': '6556209062be5c6ce4b0'
				},
				method: 'POST',
				body: JSON.stringify({
					userId: 'unique()',
					email: credentials.email,
					password: credentials.password,
					name: credentials.name
				})
			}
		);
		processing = false;
		if (res.status === 201) {
			const data = await res.json();
			accountCreatedSuccessfully = true;
			accountCreationMode = false;
		} else if (res.status === 429) {
			autherror.errorOccured = true;
			autherror.message = 'Zbyt wiele prób rejestracji. Spróbuj ponownie później.';
		} else if (res.status === 409) {
			autherror.errorOccured = true;
			autherror.message = 'Konto o podanym adresie email już istnieje.';
		} else {
			autherror.errorOccured = true;
			autherror.message = 'Wystąpił błąd. Sprawdź dane logowania i spróbuj ponownie.';
		}
	}
</script>

<svelte:head>
	<title>Konto</title>
	<meta name="description" content="Strona konta użytkownika" />
</svelte:head>

<section class="container mx-auto text-amber-950">
	<div class="flex flex-col-reverse xl:flex-row rounded-3xl overflow-hidden">
		<div class="w-full h-96 xl:h-auto xl:w-3/5 bg-cover bg-center"
				 style="background-image: url('/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg')"></div>
		<div class="w-full xl:w-2/5 p-10 xl:py-80 bg-amber-100">
			<h1 class="text-2xl">Zaloguj się lub załóż konto</h1>
			{#if accountCreationMode}
				<p class="mt-5 text-amber-800">
					Zarejestruj się, aby móc korzystać z pełnej funkcjonalności serwisu. Jeśli masz już konto,
					<button on:click={() => { accountCreationMode = false }} class="underline hover:text-amber-600 transition">
						kliknij tutaj, aby się zalogować
					</button>
					.
				</p>
			{:else}
				<p class="mt-5 text-amber-800">
					Zaloguj się, aby móc korzystać z pełnej funkcjonalności serwisu. Jeśli nie masz jeszcze konta,
					<button on:click={() => { accountCreationMode = true }} class="underline hover:text-amber-600 transition">
						kliknij tutaj, aby je stworzyć
					</button>
					.
				</p>
			{/if}
			{#if accountCreatedSuccessfully}
				<p class="mt-5 text-green-800 bg-green-200 rounded-lg p-5">
					Konto zostało stworzone pomyślnie, możesz się teraz
					zalogować.
				</p>
			{/if}
			{#if accountCreationMode}
				<form on:submit|preventDefault={register} class="mt-5 flex flex-col gap-5">
					<input type="text" bind:value="{credentials.name}" required placeholder="Nazwa użytkownika"
								 class="p-2 rounded-lg focus:outline outline-amber-300 transition-all" disabled={processing}>
					<input type="email" bind:value="{credentials.email}" required placeholder="Adres email"
								 class="p-2 rounded-lg focus:outline outline-amber-300 transition-all" disabled={processing}>
					<input type="password" bind:value="{credentials.password}" required placeholder="Hasło"
								 class="p-2 rounded-lg focus:outline outline-amber-300 transition-all" disabled={processing}>
					<button type="submit" class="p-2 rounded-lg bg-amber-300 hover:bg-amber-400 disabled:bg-amber-200 transition"
									disabled={processing}>
						{#if processing}
							<span class="opacity-70">Logowanie...</span>
						{:else}
							Zarejestruj się
						{/if}
					</button>
				</form>
			{:else}
				<form on:submit|preventDefault={login} class="mt-5 flex flex-col gap-5">
					<input type="email" bind:value="{credentials.email}" required placeholder="Adres email"
								 class="p-2 rounded-lg focus:outline outline-amber-300 transition-all" disabled={processing}>
					<input type="password" bind:value="{credentials.password}" required placeholder="Hasło"
								 class="p-2 rounded-lg focus:outline outline-amber-300 transition-all" disabled={processing}>
					<button type="submit" class="p-2 rounded-lg bg-amber-300 hover:bg-amber-400 disabled:bg-amber-200 transition"
									disabled={processing}>
						{#if processing}
							<span class="opacity-70">Logowanie...</span>
						{:else}
							Zaloguj się
						{/if}
					</button>
				</form>
			{/if}
			{#if autherror.errorOccured}
				<p class="mt-5 text-red-500 bg-rose-200 rounded-lg p-5">{autherror.message}</p>
			{/if}
		</div>
	</div>
</section>
