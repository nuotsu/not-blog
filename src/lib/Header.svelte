<header
	class="sticky top-0 p-4 border-b border-current bg-white/90 backdrop-blur"
	bind:this={elem}
>
	<h1>
		<a href="/" class="hover:link">
			{title}
		</a>
	</h1>
</header>

<script lang="ts">
	export let title: string

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
