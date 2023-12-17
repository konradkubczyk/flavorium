<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/reshot-icon-flame-fry-ANFDU9SYBC.svg';
	import userIcon from '$lib/images/user-solid.svg';
</script>

<header class="container mx-auto m-3 flex gap-10 py-2 justify-between">
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
	<div class="flex gap-5 items-center">
		<nav class="flex items-center">
			<ul class="flex gap-3">
				<li
					aria-current={$page.url.pathname === '/' ? 'page' : undefined}
					class="font-semibold text-orange-800 aria-[current='page']:bg-orange-100 hover:bg-orange-100 rounded-lg transition duration-200 select-none active:scale-95"
				>
					<a href="/" class="block py-1 px-2">Strona główna</a>
				</li>
				<li
					aria-current={$page.url.pathname === '/dodaj-przepis' ? 'page' : undefined}
					class="font-semibold text-yellow-800 aria-[current='page']:bg-yellow-100 hover:bg-yellow-100 rounded-lg transition duration-200 select-none active:scale-95"
				>
					<a href="/dodaj-przepis" class="block py-1 px-2">Dodaj przepis</a>
				</li>
				<li
					aria-current={$page.url.pathname === '/przepisy' ? 'page' : undefined}
					class="font-semibold text-lime-800 aria-[current='page']:bg-lime-100 hover:bg-lime-100 rounded-lg transition duration-200 select-none active:scale-95"
				>
					<a href="/przepisy" class="block py-1 px-2">Lista przepisów</a>
				</li>
				<li
					aria-current={$page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}
					class="font-semibold text-green-800 aria-[current='page']:bg-green-100 hover:bg-green-100 rounded-lg transition duration-200 select-none active:scale-95"
				>
					<a href="/sverdle" class="block py-1 px-2">Sverdle</a>
				</li>
			</ul>
		</nav>
		<div>
			<a
				href="/konto"
				aria-current={$page.url.pathname.startsWith('/konto') ? 'page' : undefined}
				class="aria-[current='page']:rounded-xl aria-[current='page']:bg-cyan-600 hover:bg-cyan-600 bg-cyan-800	aria-[current='page']:border-cyan-600 hover:border-cyan-600 flex items-center	gap-3 w-10 h-10 rounded-3xl border-2 border-cyan-800 transition-all duration-200 overflow-hidden active:scale-95"
			>
				<img src={userIcon} alt="User account icon" class="h-full mx-auto pt-2 invert" />
			</a>
		</div>
	</div>
</header>
