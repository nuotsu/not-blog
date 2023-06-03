import { defineField, defineType } from 'sanity'
import { VscInspect } from 'react-icons/vsc'

export default defineType({
	name: 'cta',
	title: 'CTA',
	icon: VscInspect,
	type: 'object',
	fields: [
		defineField({
			name: 'label',
			type: 'string',
		}),
		defineField({
			name: 'type',
			type: 'string',
			options: {
				list: [
					{ title: 'URL', value: 'url' },
					{ title: '🤷‍♂️', value: 'fake' },
				],
				layout: 'radio',
			}
		}),
		defineField({
			name: 'url',
			type: 'url',
			hidden: ({ parent }) => parent?.type !== 'url',
		}),
	],
	preview: {
		select: {
			title: 'label',
			type: 'type',
			url: 'url',
		},
		prepare: ({ title, type, url }) => ({
			title,
			subtitle: type === 'url' ? url : '🤷‍♂️',
		}),
	}
})
