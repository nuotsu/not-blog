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

		interface BlogPost {
			content: any
			category: BlogCategory
			author: BlogAuthor
			date: string
			metadata: Metadata
		}

		interface BlogCategory {
			_id: string
			name: string
			slug: {
				current: string
			}
		}

		interface BlogAuthor {
			name: string
			image?: Image
			slug: {
				current: string
			}
		}

		// objects

		interface Image extends SanityImage {
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
