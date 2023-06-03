<header
	class="sticky top-0 p-4 border-y border-current bg-white/90 backdrop-blur"
	bind:this={elem}
>
	<h1>
		<a href="/" class="group flex items-center gap-3">
			<i class="inline-block scale-150 not-italic">🤷‍♂️</i>
			<span class="group-hover:link">The Artificial Blog</span>
		</a>
	</h1>
</header>

<script lang="ts">
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
