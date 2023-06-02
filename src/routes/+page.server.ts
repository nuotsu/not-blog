import { client } from '$utils/sanity'
import groq from 'groq'
import type { PageServerLoad } from './$types'

export const load = (async () => {
	return await client.fetch<{
		posts: Sanity.BlogPost[],
		categories: Sanity.BlogCategory[],
	}>(groq`{
		'posts': *[_type == 'blog.post']|order(date desc){
			...,
			category->,
			author->
		},
		'categories': *[_type == 'blog.category']|order(name asc)
	}`)
}) satisfies PageServerLoad
