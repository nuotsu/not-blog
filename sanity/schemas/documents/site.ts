import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'site',
	title: 'Site',
	type: 'document',
	fields: [
		defineField({
			name: 'name',
			type: 'string',
		}),
		defineField({
			name: 'description',
			type: 'text',
			rows: 2,
			validation: (Rule) => Rule.max(160).warning(),
		}),
	]
})
