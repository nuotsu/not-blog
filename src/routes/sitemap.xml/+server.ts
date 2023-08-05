import { client } from '$utils/sanity'
import groq from 'groq'

const BASE_URL = 'https://blog-not.vercel.app'

export async function GET() {
	const { posts, authors } = await client.fetch<{
		posts: Sanity.BlogPost[],
		authors: Sanity.BlogAuthor[],
	}>(groq`{
		'posts': *[_type == 'blog.post']|order(date desc){ metadata, date },
		'authors': *[_type == 'blog.author']|order(name asc){ slug }
	}`)

	return new Response(
		`<?xml version="1.0" encoding="UTF-8"?>
		<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
			<url>
				<loc>${BASE_URL}/</loc>
				<changefreq>weekly</changefreq>
				<priority>1.0</priority>
			</url>
			${posts?.map(post => `<url>
				<loc>${BASE_URL}/blog/${post.metadata.slug.current}</loc>
				<lastmod>${post.date}</lastmod>
				<changefreq>monthly</changefreq>
				<priority>0.9</priority>
			</url>`).join('')}
			${authors?.map(author => `<url>
				<loc>${BASE_URL}/author/${author.slug.current}</loc>
				<changefreq>monthly</changefreq>
				<priority>0.8</priority>
			</url>`).join('')}
		</urlset>`.trim(),
		{
			headers: {
				'content-type': 'application/xml'
			}
		}
	)
}
