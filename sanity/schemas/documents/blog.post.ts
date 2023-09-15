import { defineField, defineType } from 'sanity'
import { IoIosImages } from 'react-icons/io'
import { VscEdit } from 'react-icons/vsc'

export default defineType({
	name: 'blog.post',
	title: 'Blog post',
	icon: VscEdit,
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
				{ type: 'cta' },
				{ type: 'horizontal-rule' },
			],
		}),
		defineField({
			name: 'category',
			type: 'reference',
			to: [{ type: 'blog.category' }],
			validation: Rule => Rule.required(),
		}),
		defineField({
			name: 'author',
			type: 'reference',
			to: [{ type: 'blog.author' }],
			validation: Rule => Rule.required(),
		}),
		defineField({
			name: 'date',
			type: 'date',
			validation: Rule => Rule.required(),
		}),
		defineField({
			name: 'metadata',
			type: 'metadata',
		}),
	],
	preview: {
		select: {
			title: 'metadata.title',
			subtitle: 'category.name',
			media: 'metadata.image',
		},
	}
})
