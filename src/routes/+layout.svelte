<header class="sticky top-0 p-4 border-b border-current bg-white/90 backdrop-blur">
	<h1>
		<a href="/">
			{title}
		</a>
	</h1>
</header>

<main class="grow flex flex-col">
	<slot></slot>
</main>

<footer class="p-4 border-t border-current text-center text-xs">
	&copy; {new Date().getFullYear()} {title}
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
	import '../styles/app.css'

	const title = 'Not Blog'
</script>
