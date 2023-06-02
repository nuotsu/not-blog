<nav class="grow flex flex-wrap items-center justify-center gap-4 p-4 text-xl">
	{#each categories as category}
		<button
			class:active={selectedCategory?._id === category?._id}
			on:click={() => onclick(category)}
		>
			{category.name}
		</button>
	{/each}
</nav>

<ul class="grid gap-px pt-px bg-current">
	{#each filteredPosts as post}
		<li class="py-2 px-4 bg-white">
			<a class="grid gap-2" href="/blog/{post.metadata.slug.current}">
				<p class="text-xs">{post.category.name}</p>
				<h2>{post.metadata.title}</h2>
				<p class="text-xs">
					<Date date={post.date} />
				</p>
			</a>
		</li>
	{/each}
</ul>

<style>
	ul {
		grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
	}

	.active {
		background-color: #000;
		color: #fff;
	}
</style>

<script lang="ts">
	import Date from '$lib/Date.svelte'

	export let data

	let { posts, categories } = data
	let selectedCategory: Sanity.BlogCategory | undefined

	$: filteredPosts = posts.filter(post => !selectedCategory?._id || post.category._id === selectedCategory._id)

	function onclick(c: Sanity.BlogCategory) {
		if (c._id === selectedCategory?._id) {
			selectedCategory = undefined
		} else {
			selectedCategory = c
		}
	}
</script>
