import type { SanityDocument } from '@sanity/client'
import { type SanityImageSource } from '@sanity/image-url/lib/types/types'

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}

	namespace Sanity {
		// documents

		interface Site extends SanityDocument {
			name: string
			description: string
		}

		interface BlogPost extends SanityDocument {
			content: any
			category: BlogCategory
			author: BlogAuthor
			date: string
			metadata: Metadata
			contentString?: string
		}

		interface BlogCategory extends SanityDocument {
			name: string
			slug: {
				current: string
			}
		}

		interface BlogAuthor extends SanityDocument {
			name: string
			image?: Image
			slug: {
				current: string
			}
		}

		// objects

		interface Image extends SanityImageObject {
			alt?: string
			caption?: string
		}

		interface Metadata {
			slug: {
				current: string
			}
			title: string
			description: string
			image?: Image
		}
	}
}

export {}
