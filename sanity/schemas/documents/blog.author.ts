import { VscPerson } from 'react-icons/vsc'
import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'blog.author',
	title: 'Blog author',
	icon: VscPerson,
	type: 'document',
	fields: [
		defineField({
			name: 'name',
			type: 'string',
		}),
		defineField({
			name: 'image',
			type: 'image',
		}),
		defineField({
			name: 'slug',
			type: 'slug',
			options: {
				source: 'name',
			},
			validation: (Rule) => Rule.required(),
		}),
	],
})
