import { defineField, defineType } from 'sanity'
import { VscHorizontalRule } from 'react-icons/vsc'

export default defineType({
	name: 'horizontal-rule',
	title: '<hr>',
	icon: VscHorizontalRule,
	type: 'object',
	fields: [
		defineField({
			name: 'spacious',
			type: 'boolean',
			initialValue: false,
		}),
	],
	preview: {
		select: {
			spacious: 'spacious',
		},
		prepare: ({ spacious }) => ({
			title: '<hr>',
			subtitle: spacious && 'Spacious',
		}),
	}
})
