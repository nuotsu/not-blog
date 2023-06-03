<a {href} class="link">
	<slot></slot>
</a>

<script lang="ts">
	import type { CustomBlockComponentProps } from '@portabletext/svelte'

	export let portableText: CustomBlockComponentProps

	let href = portableText.value.href
</script>
