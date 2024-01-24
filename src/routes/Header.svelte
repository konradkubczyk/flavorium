<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/reshot-icon-flame-fry-ANFDU9SYBC.svg';
	import userIcon from '$lib/images/user-solid.svg';
	import { account } from '$lib/stores/account';
</script>

<header class="container mx-auto flex gap-x-10 gap-y-1 py-3 justify-center md:justify-between flex-wrap">
	<div>
		<a href="/" class="flex items-center gap-3 group">
			<img src={logo} alt="Flavorium logo" class="w-16 h-16" />
			<span
				class="text-2xl font-semibold bg-gradient-to-tr from-orange-400 to-pink-900 bg-clip-text text-transparent select-none border-y-2 border-transparent group-hover:border-b-rose-800/10 transition duration-200 leading-6"
			>
				Flavorium
			</span>
		</a>
	</div>
	<div class="flex gap-5 items-center overflow-x-scroll">
		<nav class="flex items-center">
			<ul class="flex gap-5">
				<li
					aria-current={$page.url.pathname === '/' ? 'page' : undefined}
					class="font-semibold text-orange-800 border-y-2 border-transparent aria-[current='page']:border-b-orange-600/50 hover:border-b-orange-600 transition duration-200 select-none self-center hidden md:block"
				>
					<a href="/">Strona główna</a>
				</li>
				<li
					aria-current={$page.url.pathname === '/dodaj-przepis' ? 'page' : undefined}
					class="font-semibold text-yellow-800 border-y-2 border-transparent aria-[current='page']:border-b-yellow-600/50 hover:border-b-yellow-600 transition duration-200 select-none self-center"
				>
					<a href="/dodaj-przepis">Dodaj przepis</a>
				</li>
				<li
					aria-current={$page.url.pathname === '/przepisy' ? 'page' : undefined}
					class="font-semibold text-green-800 border-y-2 border-transparent aria-[current='page']:border-b-green-600/50 hover:border-b-green-600 transition duration-200 select-none self-center"
				>
					<a href="/przepisy">Lista przepisów</a>
				</li>
				{#if $account.isLoggedIn}
					<li class="flex gap-1">
						<a
							href="/konto"
							aria-current={$page.url.pathname.startsWith('/konto') ? 'page' : undefined}
							class="flex items-center p-1 rounded-full transition duration-200 select-none active:scale-95 border-2 border-neutral-200 aria-[current='page']:bg-cyan-50 hover:border-cyan-800 aria-[current='page']:border-cyan-800"
						>
							<div
								class="bg-cyan-800 rounded-full h-8 w-8 flex items-center justify-center overflow-clip"
							>
								<img src={userIcon} alt="User account icon" class="h-full mx-auto pt-2 invert" />
							</div>
							<div class="text-cyan-800 text-sm font-semibold p-2 mr-0.5">
								{$account.name}
							</div>
						</a>
					</li>
				{:else}
					<li
						aria-current={$page.url.pathname.startsWith('/konto') ? 'page' : undefined}
						class="font-semibold text-cyan-800 aria-[current='page']:bg-cyan-50 hover:bg-cyan-50 rounded-lg transition duration-200 select-none active:scale-95 border-2 border-neutral-200 hover:border-cyan-800 aria-[current='page']:border-cyan-800"
					>
						<a href="/konto" class="block py-1 px-2">Zaloguj się</a>
					</li>
				{/if}
			</ul>
		</nav>
	</div>
</header>
