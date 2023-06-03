import { client } from '$utils/sanity'
import groq from 'groq'
import type { LayoutServerLoad } from './$types'

export const load = (async () => {
	return await client.fetch<{
		site: Sanity.Site
	}>(groq`{
		'site': *[_type == 'site'][0]
	}`)
}) satisfies LayoutServerLoad
