import { client } from '$utils/sanity'
import groq from 'groq'
import type { PageServerLoad } from './$types'

export const load = (async () => {
	return {
		posts: await client.fetch<Sanity.BlogPost[]>(groq`
			*[_type == 'blog.post']|order(date desc){
				...,
				category->,
				author->
			}
		`),
	}
}) satisfies PageServerLoad
