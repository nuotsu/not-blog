<svelte:head>
	<title>{post.metadata.title}</title>
	<meta name="description" content={post.metadata.description}>
</svelte:head>

<article>
	{#if post.metadata.image}
		<figure>
			<Img
				class="w-full max-h-[60vh] object-cover"
				image={post.metadata.image}
				alt={post.metadata.title}
				loading="eager"
				draggable={false}
			/>
		</figure>
	{/if}

	<div class="grid gap-4 py-12 px-4 max-w-screen-md mx-auto">
		<header class="grid gap-4 mb-4">
			<h1 class="text-3xl font-bold">{post.metadata.title}</h1>

			<p class="text-xs">
				<a class="hover:link" href="/?category={post.category.slug.current}">
					{post.category.name}
				</a>
				<span class="mx-1">|</span>

				<span>By <a class="hover:link" href="/author/{post.author.slug.current}">{post.author.name}</a></span>
				<span class="mx-1">|</span>

				<Date date={post.date} />
				<span class="mx-1">|</span>

				<span>{readTime} min read</span>
			</p>
		</header>

		<div class="grid gap-[1em]">
			<PortableText
				value={post.content}
				components={{
					block: {
						h2: Heading,
						h3: Heading,
						blockquote: Quote,
					},
					marks: {
						link: Link,
					},
					types: {
						image: Image,
						cta: CTA,
					}
				}}
			/>
		</div>
	</div>
</article>

<script lang="ts">
	import Img from '$lib/Img.svelte'
	import Date from '$lib/Date.svelte'
	import { PortableText } from '@portabletext/svelte'
	import Heading from '$lib/pt/Heading.svelte'
	import Quote from '$lib/pt/Quote.svelte'
	import Link from '$lib/pt/Link.svelte'
	import Image from '$lib/pt/Image.svelte'
	import CTA from '$lib/pt/CTA.svelte'

	export let data

	const { post } = data

	const readTime = Math.ceil((post.contentString?.split(' ').length || 0) / 200)
</script>
