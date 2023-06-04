<ul class="grid gap-px items-stretch pt-px bg-current">
	{#each posts as post, i (post._id + i)}
		<li class="bg-white" style:--delay={i}>
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

	li {
		animation: zoom .2s ease-in-out calc(var(--delay, 0) * 0.03s) forwards;
		opacity: .5;
		scale: .9;
	}
	@keyframes zoom {
		to {
			opacity: 1;
			scale: 1;
		}
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
