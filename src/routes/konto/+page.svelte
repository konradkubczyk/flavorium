<script lang="ts">
	import { account } from '$lib/stores/account';
	import * as accountService from '$lib/services/account';
	import type { Credentials } from '$lib/models/credentials.ts';
	import { goto } from '$app/navigation';

	let credentials: Credentials = {
		name: '',
		email: '',
		password: ''
	};

	let processing = false;
	let accountCreationMode = false;
	let accountCreatedSuccessfully = false;

	let authError: string = '';

	async function login() {
		accountCreatedSuccessfully = false;
		processing = true;
		authError = '';
		const status = await accountService.login(credentials.email, credentials.password);
		processing = false;
		switch (status) {
			case 201:
				break;
			case 401:
				authError = 'Nieprawidłowy email lub hasło.';
				break;
			case 429:
				authError = 'Zbyt wiele prób logowania. Spróbuj ponownie później.';
				break;
			default:
				authError = 'Wystąpił nieznany błąd.';
		}
	}

	async function register() {
		accountCreatedSuccessfully = false;
		processing = true;
		authError = '';
		const status = await accountService.register(
			credentials.email,
			credentials.password,
			credentials.name
		);
		processing = false;
		switch (status) {
			case 201:
				accountCreatedSuccessfully = true;
				accountCreationMode = false;
				break;
			case 409:
				authError = 'Konto o podanym adresie email już istnieje.';
				break;
			case 429:
				authError = 'Wystąpił błąd. Sprawdź dane logowania i spróbuj ponownie.';
				break;
			default:
				authError = 'Wystąpił błąd. Upewnij się, że wybrane hasło jest bezpieczne.';
		}
	}
</script>

<svelte:head>
	<title>Konto</title>
	<meta name="description" content="Strona konta użytkownika" />
</svelte:head>

{#if $account.isLoggedIn}
	<section class="container mx-auto p-10 text-center flex-1 flex flex-col justify-center">
		<div>
			<div class="text-3xl text-cyan-800 font-bold">Zalogowano.</div>
			<div class="flex gap-3 justify-center">
				<button
					on:click={accountService.logout}
					class="mt-5 py-2 px-3 rounded-lg bg-cyan-700 text-white hover:bg-cyan-600 active:hover:bg-cyan-700 transition"
					>Wyloguj się
				</button>
				<button
					on:click={() => {
						goto('/dodaj-przepis');
					}}
					class="mt-5 py-2 px-3 rounded-lg bg-cyan-700 text-white hover:bg-cyan-600 active:hover:bg-cyan-700 transition"
					>Dodaj przepis
				</button>
				<button
					on:click={() => {
						goto('/przepisy');
					}}
					class="mt-5 py-2 px-3 rounded-lg bg-cyan-700 text-white hover:bg-cyan-600 active:hover:bg-cyan-700 transition"
					>Przeglądaj przepisy
				</button>
			</div>
		</div>
	</section>
{:else}
	<section class="container mx-auto text-amber-950 flex-1 flex">
		<div class="flex flex-col-reverse xl:flex-row rounded-3xl overflow-hidden flex-1">
			<div class="w-full xl:w-2/5 p-10 bg-amber-100 flex flex-col justify-center">
				{#if accountCreationMode}
					<h1 class="text-2xl">Utwórz konto</h1>
					<p class="mt-5 text-amber-800">
						Zarejestruj się, aby móc korzystać z pełnej funkcjonalności serwisu.
					</p>
				{:else}
					<h1 class="text-2xl">Zaloguj się</h1>
					<p class="mt-5 text-amber-800">
						Zaloguj się, aby móc korzystać z pełnej funkcjonalności serwisu.
					</p>{/if}
				{#if accountCreatedSuccessfully}
					<p class="mt-5 text-green-800 bg-green-200 rounded-lg p-5">
						Konto zostało stworzone pomyślnie, możesz się teraz zalogować.
					</p>
				{/if}
				{#if accountCreationMode}
					<form on:submit|preventDefault={register} class="mt-5 flex flex-col gap-5">
						<input
							type="text"
							bind:value={credentials.name}
							required
							placeholder="Nazwa użytkownika"
							class="p-2 rounded-lg focus:outline outline-amber-300 transition-all"
							disabled={processing}
						/>
						<input
							type="email"
							bind:value={credentials.email}
							required
							placeholder="Adres email"
							class="p-2 rounded-lg focus:outline outline-amber-300 transition-all"
							disabled={processing}
						/>
						<input
							type="password"
							bind:value={credentials.password}
							required
							placeholder="Hasło"
							class="p-2 rounded-lg focus:outline outline-amber-300 transition-all"
							disabled={processing}
						/>
						<div class="flex gap-5">
							<button
								type="submit"
								class="flex-1 p-2 rounded-lg bg-amber-300 hover:bg-amber-400 disabled:bg-amber-200 disabled:opacity-75 active:bg-amber-500/80 transition"
								disabled={processing}
							>
								{#if processing}
									Rejestracja...
								{:else}
									Zarejestruj się
								{/if}
							</button>
							<button
								on:click={() => {
									accountCreationMode = false;
								}}
								class="flex-1 p-2 rounded-lg bg-white/75 hover:bg-amber-200/75 disabled:bg-amber-200/75 disabled:opacity-75 active:bg-amber-300/60 transition"
								disabled={processing}
							>
								Mam już konto
							</button>
						</div>
					</form>
				{:else}
					<form on:submit|preventDefault={login} class="mt-5 flex flex-col gap-5">
						<input
							type="email"
							bind:value={credentials.email}
							required
							placeholder="Adres email"
							class="p-2 rounded-lg focus:outline outline-amber-300 transition-all"
							disabled={processing}
						/>
						<input
							type="password"
							bind:value={credentials.password}
							required
							placeholder="Hasło"
							class="p-2 rounded-lg focus:outline outline-amber-300 transition-all"
							disabled={processing}
						/>
						<div class="flex gap-5">
							<button
								type="submit"
								class="flex-1 p-2 rounded-lg bg-amber-300 hover:bg-amber-400 disabled:bg-amber-200 disabled:opacity-75 active:bg-amber-500/80 transition"
								disabled={processing}
							>
								{#if processing}
									Logowanie...
								{:else}
									Zaloguj się
								{/if}
							</button>
							<button
								on:click={() => {
									accountCreationMode = true;
								}}
								class="flex-1 p-2 rounded-lg bg-white/75 hover:bg-amber-200/75 disabled:bg-amber-200/75 disabled:opacity-75 active:bg-amber-300/60 transition"
								disabled={processing}
							>
								Nie mam konta
							</button>
						</div>
					</form>
				{/if}
				{#if authError}
					<p class="mt-5 text-red-500 bg-rose-200 rounded-lg p-5">{authError}</p>
				{/if}
			</div>
			<div
				class="w-full h-96 xl:h-auto xl:w-3/5 bg-cover bg-center"
				style="background-image: url('/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg')"
			></div>
		</div>
	</section>
{/if}
