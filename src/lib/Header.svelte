<header
	class="sticky top-0 z-10 p-4 border-y border-current bg-white/90 backdrop-blur"
	bind:this={elem}
>
	<h1 class="font-serif text-xl">
		<a href="/" class="group inline-flex items-center gap-3">
			<Logo/>
			<span class="group-hover:link">The Artificial Blog</span>
		</a>
	</h1>
</header>

<script lang="ts">
	import Logo from './Logo.svelte'

	let elem: HTMLElement

	$: {
		if (elem) {
			document.documentElement.style.setProperty(
			'--header-height',
			`${elem.offsetHeight}px`
			)
		}
	}
</script>
