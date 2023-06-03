<ul class="grid gap-px items-stretch pt-px bg-current">
	{#each posts as post}
		<li class="bg-white">
			<PostPreview {post} />
		</li>
	{/each}

	<li class="m-auto p-4 text-3xl">
		<span class="cursor-default grid place-content-center aspect-square w-[1.5em] rounded-full">
			🤷‍♂️
		</span>
	</li>
</ul>

<style>
	ul {
		grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
	}

	span {
		animation: rotate 3s linear infinite;
	}
	span:not(:hover) {
		animation-play-state: paused;
	}

	@keyframes rotate {
		to {
			rotate: 1turn;
		}
	}
</style>

<script lang="ts">
	import PostPreview from '$lib/PostPreview.svelte'

	export let posts: Sanity.BlogPost[]
</script>
