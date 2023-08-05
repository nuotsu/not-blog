import { client } from '$utils/sanity'
import groq from 'groq'
import type { PageServerLoad } from './$types'
import { error } from '@sveltejs/kit'

export const load = (async ({ params }) => {
	const { slug } = params as { slug: string }

	const { author, posts } = await client.fetch<{
		author: Sanity.BlogAuthor,
		posts: Sanity.BlogPost[]
	}>(groq`{
		'author': *[_type == 'blog.author' && slug.current == $slug][0],
		'posts': *[_type == 'blog.post' && author->slug.current == $slug]|order(date desc){
			category->,
			date,
			metadata
		}
	}`, { slug })

	if (!author) throw error(404, 'Author not found')

	return {
		author,
		posts
	}
}) satisfies PageServerLoad
