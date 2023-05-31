import { createClient } from '@sanity/client'
import { dev } from '$app/environment'

export const client = createClient({
	projectId: '60z76igw',
	dataset: 'production',
	useCdn: dev,
	apiVersion: '2023-05-30',
})
