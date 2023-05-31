import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import structure from './src/structure'

export default defineConfig({
	name: 'default',
	title: 'Not Blog',

	projectId: '60z76igw',
	dataset: 'production',

	plugins: [
		deskTool({
			structure,
		}),
		visionTool(),
	],

	schema: {
		types: schemaTypes,
	},
})
