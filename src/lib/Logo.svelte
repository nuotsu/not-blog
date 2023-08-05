<svelte:document on:scroll={onscroll} />

<i
	class="relative inline-block scale-150 not-italic"
	data-content={content}
	style:--progress="{progress}%"
>
	{content}
</i>

<style>
	i::after {
		content: attr(data-content);
		position: absolute;
		inset: 0;
		color: transparent;
		-webkit-background-clip: text;
		background-clip: text;
		background-image: linear-gradient(to top,
			black 0%,
			black var(--progress),
			transparent var(--progress),
			transparent
		);
	}
</style>

<script lang="ts">
	export let content: string = '🤷‍♂️'

	let progress = 0

	function onscroll(e: Event) {
		const { documentElement } = e.target as Document
		progress = documentElement.scrollTop / (documentElement.scrollHeight - window.innerHeight) * 100
	}
</script>
