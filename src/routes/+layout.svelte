<script>
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import '../app.scss';
</script>

<div class="app flex-1 flex flex-col justify-between px-3">
	<Header />

	<main class="flex-1 flex flex-col">
		<slot />
	</main>

	<Footer />
</div>
