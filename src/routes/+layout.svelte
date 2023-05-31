<h1>{title}</h1>

<slot></slot>

<footer>&copy; {new Date().getFullYear()} {title}</footer>

<script>
	import '../styles/app.css'

	const title = 'Not Blog'
</script>
