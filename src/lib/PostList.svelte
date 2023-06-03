<ul class="grid gap-px items-stretch pt-px bg-current">
	{#each posts as post}
		<li class="bg-white">
			<PostPreview {post} />
		</li>
	{/each}
</ul>

<style>
	ul {
		grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
	}
</style>

<script lang="ts">
	import PostPreview from '$lib/PostPreview.svelte'

	export let posts: Sanity.BlogPost[]
</script>
