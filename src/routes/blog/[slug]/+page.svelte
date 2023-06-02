<svelte:head>
	<title>{post.metadata.title}</title>
	<meta name="description" content={post.metadata.description}>
</svelte:head>

<article class="grid gap-4 p-4">
	<h1 class="font-bold">{post.metadata.title}</h1>

	<p class="text-xs">
		<a href="/category/{post.category.slug.current}">
			{post.category.name}
		</a>

		<span class="mx-1">|</span>

		<span>By <a href="/author/{post.author.slug.current}">{post.author.name}</a></span>

		<span class="mx-1">|</span>

		<Date date={post.date} />
	</p>

	<PortableText
		value={post.content}
		components={{
			block: {
				blockquote: Quote,
			}
		}}
	/>
</article>

<script lang="ts">
	import { PortableText } from '@portabletext/svelte'
	import Date from '$lib/Date.svelte'
	import Quote from '$lib/Quote.svelte'

	export let data

	const { post } = data
</script>
