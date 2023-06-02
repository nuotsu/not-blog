import { createClient } from '@sanity/client'
import { dev } from '$app/environment'
import imageUrlBuilder from '@sanity/image-url'

const config = {
	projectId: '60z76igw',
	dataset: 'production',
}

export const client = createClient({
	...config,
	useCdn: dev,
	apiVersion: '2023-05-30',
})

const builder = imageUrlBuilder(config)

export const urlFor = (image?: Sanity.Image) => image && builder.image(image).auto('format')
