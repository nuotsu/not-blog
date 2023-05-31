import { StructureResolver } from 'sanity/desk'
import { list } from './builders'
import { VscPerson, VscRadioTower, VscTag } from 'react-icons/vsc'

const structure: StructureResolver = (S, context) => S.list()
	.title('Content')
	.items([
		list(S, 'Blog posts', 'blog.post').icon(VscRadioTower),
		list(S, 'Blog categories', 'blog.category').icon(VscTag),
		list(S, 'Blog authors', 'blog.author').icon(VscPerson),
	])

export default structure
