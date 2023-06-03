<Header {title} />

<main class="grow flex flex-col">
	<slot></slot>
</main>

<footer class="p-4 border-t border-current text-center text-xs">
	&copy; {new Date().getFullYear()} {title} |
	<a class="hover:link" href="https://github.com/nuotsu" target="_blank" rel="noopener noreferrer">nuotsu</a>
</footer>

<style>
	:global(body) {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		min-height: 100dvh;
	}
</style>

<script>
	import Header from '$lib/Header.svelte'
	import '../styles/app.css'

	const title = '🤷‍♂️ Not Blog'
</script>
