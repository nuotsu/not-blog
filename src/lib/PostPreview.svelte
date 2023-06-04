<a class="group h-full flex flex-col" href="/blog/{post.metadata.slug.current}">
	{#if post.metadata.image}
		<figure>
			<Img
				class="aspect-[1.7] w-full object-cover"
				image={post.metadata.image}
				builder={i => i.height(300)}
				alt={post.metadata.title}
				draggable={false}
			/>
		</figure>
	{/if}

	<div class="grid gap-2 py-2 px-4 my-auto">
		<p class="text-xs">{post.category.name}</p>
		<h2 class="font-serif text-lg leading-snug group-hover:link">{post.metadata.title}</h2>
		<p class="text-xs">
			<Date date={post.date} />
		</p>
	</div>
</a>

<script lang="ts">
	import Date from '$lib/Date.svelte'
	import Img from './Img.svelte'

	export let post: Sanity.BlogPost
</script>
