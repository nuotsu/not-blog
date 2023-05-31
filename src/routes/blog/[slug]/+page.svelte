<svelte:head>
	<title>{post.metadata.title}</title>
	<meta name="description" content={post.metadata.description}>
</svelte:head>

<p class="uppercase">
	<a href="/category/{post.category.slug.current}">
		{post.category.name}
	</a>
</p>

<h1>{post.metadata.title}</h1>

{#if post.author.name}
	<p>By <a href="/author/{post.author.slug.current}">{post.author.name}</a></p>
{/if}

<Date date={post.date} />

<PortableText value={post.content} />

<script lang="ts">
	import { PortableText } from '@portabletext/svelte'
	import Date from '$lib/Date.svelte'

	export let data

	const { post } = data
</script>
