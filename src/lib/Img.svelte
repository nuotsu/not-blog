<img
	{src}
	alt={alt || image.alt}
	{width} {height}
	loading="lazy"
	{...$$restProps}
>

<script lang="ts">
	import { urlFor } from '$utils/sanity'
	import { getImageDimensions, type SanityImageSource } from '@sanity/asset-utils'

	export let
		image: Sanity.Image,
		alt: string = '',
		builder = (i: any) => i

	const src = builder
		? builder(urlFor(image)).url()
		: urlFor(image)?.url()

	const { width, height } = getImageDimensions(image as SanityImageSource)
</script>
