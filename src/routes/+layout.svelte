<svelte:head>
	<title>{data.site.name}</title>
	<meta name="description" content={data.site.description}>

	{#if !dev}
		<!-- Google tag (gtag.js) -->
		<script async src="https://www.googletagmanager.com/gtag/js?id=G-7V44BN4HZV"></script>
		<script>
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());
			gtag('config', 'G-7V44BN4HZV');
		</script>
	{/if}
</svelte:head>

<Header />

<main class="grow flex flex-col">
	<slot></slot>
</main>

<Footer/>

<style>
	:global(body) {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		min-height: 100dvh;
	}
</style>

<script>
	import { dev } from '$app/environment'
	import Header from '$lib/Header.svelte'
	import Footer from '$lib/Footer.svelte'
	import '../styles/app.css'

	export let data
</script>
