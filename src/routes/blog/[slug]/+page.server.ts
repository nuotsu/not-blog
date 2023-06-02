import { client } from '$utils/sanity'
import groq from 'groq'
import type { PageServerLoad } from './$types'

export const load = (async ({ params }) => {
	const { slug } = params as { slug: string }

	return {
		post: await client.fetch<Sanity.BlogPost>(groq`
			*[_type == 'blog.post' && metadata.slug.current == $slug][0]{
				...,
				category->,
				author->,
				'contentString': pt::text(content)
			}
		`, { slug }),
	}
}) satisfies PageServerLoad
