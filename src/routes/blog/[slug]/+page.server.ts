import { client } from '$utils/sanity'
import groq from 'groq'
import type { PageServerLoad } from './$types'

export const load = (async ({ params }) => {
	const { slug } = params as { slug: string }

	return await client.fetch<{
		post: Sanity.BlogPost
	}>(groq`{
		'post': *[_type == 'blog.post' && metadata.slug.current == $slug][0]{
			...,
			category->,
			author->,
			'contentString': pt::text(content)
		}
	}`, { slug })
}) satisfies PageServerLoad
