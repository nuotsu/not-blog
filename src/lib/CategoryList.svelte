<nav class="grow flex flex-wrap items-center justify-center gap-2 py-12 px-4 text-2xl">
	<button
		class="_btn font-serif border-transparent hover:border-current"
		class:active={!$selectedCategory}
		on:click={() => onclick()}
	>
		All
	</button>

	{#each categories as category}
		<button
			class="_btn font-serif border-transparent hover:border-current"
			class:active={$selectedCategory === category.slug.current}
			on:click={() => onclick(category)}
		>
			{category.name}
		</button>
	{/each}
</nav>

<style>
	.active {
		background-color: #000;
		color: #fff;
		border: 1px solid;
	}
</style>

<script lang="ts">
	import { goto } from '$app/navigation'

	export let categories: Sanity.BlogCategory[]

	function onclick(category?: Sanity.BlogCategory) {
		$selectedCategory = category?.slug.current
		goto('/', { replaceState: false })
	}
</script>

<script context="module" lang="ts">
	import { writable } from 'svelte/store'

	export const selectedCategory = writable<string | undefined>(undefined)
</script>
