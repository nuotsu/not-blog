<CategoryList {categories} />
<PostList posts={filteredPosts} />

<script lang="ts">
	import CategoryList, { selectedCategory } from '$lib/CategoryList.svelte'
	import PostList from '$lib/PostList.svelte'
	import { page } from '$app/stores'

	export let data

	let { posts, categories } = data
	let { searchParams } = $page.url

	$: filteredPosts = posts.filter(post => !$selectedCategory || post.category.slug.current === $selectedCategory)

	if (searchParams.has('category')) {
		$selectedCategory = searchParams.get('category') as string
	}
</script>
