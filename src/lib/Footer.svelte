<footer class="p-4 border-t border-current text-center text-xs">
	&copy; {new Date().getFullYear()}
	<a class="hover:link" href="https://github.com/nuotsu/not-blog">🤷‍♂️ {site.name}</a>
	by
	<a class="hover:link" href="https://github.com/nuotsu" target="_blank" rel="noopener noreferrer">nuotsu</a>
</footer>

<script lang="ts">
	import { page } from '$app/stores'
	import type { LayoutData } from '../routes/$types'

	const { site } = $page.data as LayoutData
</script>
