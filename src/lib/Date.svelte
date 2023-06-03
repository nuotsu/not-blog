<time datetime={date}>
	{format(date)}
</time>

<script lang="ts">
	export let date: string = ''

	const format = (date: string) => new Date(date + 'T00:00:00').toLocaleDateString('en-US', {
		month: 'short',
		day: 'numeric',
		year: 'numeric',
	})
</script>
