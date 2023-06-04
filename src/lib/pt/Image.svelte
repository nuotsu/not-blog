{#if image}
	<figure class="my-4 <md:full-width">
		<Img
			class="mx-auto"
			{image}
			builder={i => i.width(1200)}
		/>

		{#if image.caption}
			<figcaption class="text-center italic mt-2 <md:px-4 text-sm">
				{image.caption}
			</figcaption>
		{/if}
	</figure>
{/if}

<script lang="ts">
	import Img from '$lib/Img.svelte'
	import type { CustomBlockComponentProps } from '@portabletext/svelte'

	export let portableText: CustomBlockComponentProps

	const image = portableText.value as Sanity.Image
</script>
