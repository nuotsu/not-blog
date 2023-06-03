<header class="grow flex items-center justify-center py-12 px-4">
	<h1 class="text-xl">{author.name}</h1>
</header>

<PostList {posts} />

<script lang="ts">
	import PostList from '$lib/PostList.svelte'

	export let data

	const { author, posts } = data
</script>
