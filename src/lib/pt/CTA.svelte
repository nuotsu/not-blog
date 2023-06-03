<p class="px-4 py-8 text-center dots full-width">
	{#if cta.type === 'url'}
		<a class="action text-xl" href={cta.url}>
			{cta.label}
		</a>

	{:else}
		<button class="action text-xl">{cta.label}</button>

	{/if}
</p>

<script lang="ts">
	import type { CustomBlockComponentProps } from '@portabletext/svelte'

	export let portableText: CustomBlockComponentProps<{
		label: string
		type: 'fake'
	} | {
		label: string
		type: 'url'
		url: string
	}>

	const cta = portableText.value
</script>
