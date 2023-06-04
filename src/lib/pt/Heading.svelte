<svelte:element this={tag} bind:this={element} {id}>
	<slot></slot>

	<a href="#{id}">🔗</a>
</svelte:element>

<style lang="postcss">
	h1 { @apply font-serif text-3xl; }
	h2 { @apply font-serif text-2xl; }
	h3 { @apply font-serif text-xl; }
	h4 { @apply font-serif text-lg; }
	h5,h6 { @apply font-serif; }

	:is(h1,h2,h3,h4,h5,h6):not(:hover) a {
		display: none;
	}
</style>

<script lang="ts">
	import type { CustomBlockComponentProps } from '@portabletext/svelte'
	import slugify from 'slugify'

	export let portableText: CustomBlockComponentProps

	const tag = portableText.value.style

	let element: HTMLElement
	let id: string

	$: {
		if (element) {
			id = slugify(element.innerText, { lower: true })
		}
	}
</script>
