<nav class="grow flex flex-wrap items-center justify-center gap-2 py-12 px-4 text-xl">
	<button
		class="px-[1em] rounded-full border border-transparent hover:border-current"
		class:active={!selectedCategory?._id}
		on:click={() => selectedCategory = undefined}
	>
		All
	</button>

	{#each categories as category}
		<button
			class="px-[1em] rounded-full border border-transparent hover:border-current"
			class:active={selectedCategory?._id === category?._id}
			on:click={() => selectedCategory = category}
		>
			{category.name}
		</button>
	{/each}
</nav>

<ul class="grid gap-px items-stretch pt-px bg-current">
	{#each filteredPosts as post}
		<li class="bg-white">
			<PostPreview {post} />
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
		border: 1px solid;
	}
</style>

<script lang="ts">
	import PostPreview from '$lib/PostPreview.svelte'

	export let data

	let { posts, categories } = data
	let selectedCategory: Sanity.BlogCategory | undefined

	$: filteredPosts = posts.filter(post => !selectedCategory?._id || post.category._id === selectedCategory._id)
</script>
