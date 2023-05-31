import { defineField, defineType } from 'sanity'
import { IoIosImages } from 'react-icons/io'

export default defineType({
	name: 'blog.post',
	title: 'Blog post',
	type: 'document',
	fields: [
		defineField({
			name: 'content',
			type: 'array',
			of: [
				{ type: 'block' },
				{
					type: 'image',
					icon: IoIosImages,
					fields: [
						defineField({
							name: 'alt',
							type: 'string',
						}),
						defineField({
							name: 'caption',
							type: 'string',
						}),
					]
				},
			],
		}),
		defineField({
			name: 'category',
			type: 'reference',
			to: [{ type: 'blog.category' }],
		}),
		defineField({
			name: 'author',
			type: 'reference',
			to: [{ type: 'blog.author' }],
		}),
		defineField({
			name: 'date',
			type: 'date',
		}),
		defineField({
			name: 'metadata',
			type: 'metadata',
		}),
	],
	preview: {
		select: {
			title: 'metadata.title',
			subtitle: 'date',
		},
	}
})
