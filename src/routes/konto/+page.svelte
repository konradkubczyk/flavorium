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
	let isLoggedIn: boolean | null = null;

	interface AuthError {
		errorOccurred: boolean;
		message: string;
	}

	let authError: AuthError = {
		errorOccurred: false,
		message: ''
	};

	async function login() {
		accountCreatedSuccessfully = false;
		processing = true;
		authError.errorOccurred = false;
		const res = await fetch(
			'https://cloud.appwrite.io/v1/account/sessions/email',
			{
				method: 'POST',
				credentials: 'include',
				headers: {
					'Content-Type': 'application/json',
					'X-Appwrite-Project': '6556209062be5c6ce4b0'
				},
				body: JSON.stringify({
					email: credentials.email,
					password: credentials.password
				})
			}
		);
		processing = false;
		if (res.status === 201) {
			await res.json();
			await checkIfLoggedIn();
		} else if (res.status === 401) {
			authError.errorOccurred = true;
			authError.message = 'Nieprawidłowy email lub hasło.';
		} else if (res.status === 429) {
			authError.errorOccurred = true;
			authError.message = 'Zbyt wiele prób logowania. Spróbuj ponownie później.';
		} else {
			authError.errorOccurred = true;
			authError.message = 'Wystąpił błąd. Upewnij się, że wybrane hasło jest bezpieczne.';
		}
	}

	async function register() {
		accountCreatedSuccessfully = false;
		processing = true;
		authError.errorOccurred = false;
		const res = await fetch(
			'https://cloud.appwrite.io/v1/account',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'X-Appwrite-Project': '6556209062be5c6ce4b0'
				},
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
			accountCreatedSuccessfully = true;
			accountCreationMode = false;
		} else if (res.status === 429) {
			authError.errorOccurred = true;
			authError.message = 'Zbyt wiele prób rejestracji. Spróbuj ponownie później.';
		} else if (res.status === 409) {
			authError.errorOccurred = true;
			authError.message = 'Konto o podanym adresie email już istnieje.';
		} else {
			authError.errorOccurred = true;
			authError.message = 'Wystąpił błąd. Sprawdź dane logowania i spróbuj ponownie.';
		}
	}

	async function logout() {
		await fetch(
			'https://cloud.appwrite.io/v1/account/sessions/current',
			{
				method: 'DELETE',
				credentials: 'include',
				headers: {
					'Content-Type': 'application/json',
					'X-Appwrite-Project': '6556209062be5c6ce4b0'
				}
			}
		);
		await checkIfLoggedIn();
	}

	async function checkIfLoggedIn() {
		const res = await fetch(
			'https://cloud.appwrite.io/v1/account/sessions/current',
			{
				method: 'GET',
				credentials: 'include',
				headers: {
					'Content-Type': 'application/json',
					'X-Appwrite-Project': '6556209062be5c6ce4b0'
				}
			}
		);
		isLoggedIn = res.status === 200;
	}

	checkIfLoggedIn();
</script>

<svelte:head>
	<title>Konto</title>
	<meta name="description" content="Strona konta użytkownika" />
</svelte:head>

{#if isLoggedIn === null }

	<section class="container mx-auto py-80 text-center">
		<div class="text-3xl animate-pulse text-cyan-800">Pobieranie danych, proszę czekać...</div>
	</section>

{:else if isLoggedIn === true }

	<section class="container mx-auto py-80 text-center">
		<div class="text-3xl text-cyan-800">Zalogowano. Chcesz się wylogować?</div>
		<button on:click={logout} class="mt-5 py-2 px-3 rounded-lg bg-cyan-700 text-white hover:bg-cyan-600 active:scale-95 transition"
		>Wyloguj</button>
	</section>

{:else if isLoggedIn === false }

	<section class="container mx-auto text-amber-950">
		<div class="flex flex-col-reverse xl:flex-row rounded-3xl overflow-hidden">
			<div class="w-full xl:w-2/5 p-10 xl:py-80 bg-amber-100">
				{#if accountCreationMode}
					<h1 class="text-2xl">Utwórz konto</h1>
					<p class="mt-5 text-amber-800">
						Zarejestruj się, aby móc korzystać z pełnej funkcjonalności serwisu.
					</p>
				{:else}
					<h1 class="text-2xl">Zaloguj się</h1>
					<p class="mt-5 text-amber-800">
						Zaloguj się, aby móc korzystać z pełnej funkcjonalności serwisu.
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
						<div class="flex gap-5">
							<button type="submit"
											class="flex-1 p-2 rounded-lg bg-amber-300 hover:bg-amber-400 disabled:bg-amber-200 disabled:opacity-75 active:scale-95 transition"
											disabled={processing}>
								{#if processing}
									Rejestracja...
								{:else}
									Zarejestruj się
								{/if}
							</button>
							<button on:click={() => { accountCreationMode = false }}
											class="flex-1 p-2 rounded-lg bg-white/75 hover:bg-amber-200/75 disabled:bg-amber-200/75 disabled:opacity-75 active:scale-95 transition"
											disabled={processing}>
								Mam już konto
							</button>
						</div>
					</form>
				{:else}
					<form on:submit|preventDefault={login} class="mt-5 flex flex-col gap-5">
						<input type="email" bind:value="{credentials.email}" required placeholder="Adres email"
									 class="p-2 rounded-lg focus:outline outline-amber-300 transition-all" disabled={processing}>
						<input type="password" bind:value="{credentials.password}" required placeholder="Hasło"
									 class="p-2 rounded-lg focus:outline outline-amber-300 transition-all" disabled={processing}>
						<div class="flex gap-5">
							<button type="submit"
											class="flex-1 p-2 rounded-lg bg-amber-300 hover:bg-amber-400 disabled:bg-amber-200 disabled:opacity-75 active:scale-95 transition"
											disabled={processing}>
								{#if processing}
									Logowanie...
								{:else}
									Zaloguj się
								{/if}
							</button>
							<button on:click={() => { accountCreationMode = true }}
											class="flex-1 p-2 rounded-lg bg-white/75 hover:bg-amber-200/75 disabled:bg-amber-200/75 disabled:opacity-75 active:scale-95 transition"
											disabled={processing}>
								Nie mam konta
							</button>
						</div>
					</form>
				{/if}
				{#if authError.errorOccurred}
					<p class="mt-5 text-red-500 bg-rose-200 rounded-lg p-5">{authError.message}</p>
				{/if}
			</div>
			<div class="w-full h-96 xl:h-auto xl:w-3/5 bg-cover bg-center"
					 style="background-image: url('/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg')"></div>
		</div>
	</section>
{/if}
