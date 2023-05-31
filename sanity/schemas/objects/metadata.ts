import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'metadata',
	title: 'Metadata',
	type: 'object',
	fields: [
		defineField({
			name: 'slug',
			type: 'slug',
			options: {
				source: (doc: any) => doc.metadata?.title || doc.title,
			}
		}),
		defineField({
			name: 'title',
			type: 'string',
			validation: (Rule) => Rule.max(60).required(),
		}),
		defineField({
			name: 'description',
			type: 'text',
			rows: 3,
			validation: (Rule) => Rule.max(160).required(),
		}),
	]
})
