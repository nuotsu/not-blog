<time datetime={date}>
	{format(new Date(date))}
</time>

<script lang="ts">
	export let date: string = ''

	const { format } = new Intl.DateTimeFormat('en', {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	})
</script>
