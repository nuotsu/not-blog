<ul>
	{#each posts as post}
		<li>
			<a href="/blog/{post.metadata.slug.current}">
				{post.metadata.title}
			</a>
		</li>
	{/each}
</ul>

<script lang="ts">
	export let data

	let { posts } = data
</script>
