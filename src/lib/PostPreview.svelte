<a class="group h-full flex flex-col" href="/blog/{post.metadata.slug.current}">
	{#if post.metadata.image}
		<figure>
			<img
				src={urlFor(post.metadata.image)?.height(300).url()}
				alt={post.metadata.title}
				loading="lazy"
				draggable={false}
			/>
		</figure>
	{/if}

	<div class="grid gap-2 py-2 px-4 my-auto">
		<p class="text-xs">{post.category.name}</p>
		<h2 class="leading-snug group-hover:link">{post.metadata.title}</h2>
		<p class="text-xs">
			<Date date={post.date} />
		</p>
	</div>
</a>

<style>
	figure :global(img) {
		width: 100%;
		aspect-ratio: 1.7;
		object-fit: cover;
	}
</style>

<script lang="ts">
	import Date from '$lib/Date.svelte'
	import { urlFor } from '$utils/sanity'

	export let post: Sanity.BlogPost
</script>
