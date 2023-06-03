import { StructureResolver } from 'sanity/desk'
import { list, singleton } from './builders'
import { VscPerson, VscRadioTower, VscServerProcess, VscTag } from 'react-icons/vsc'

const structure: StructureResolver = (S, context) => S.list()
	.title('Content')
	.items([
		singleton(S, 'Site', 'site').icon(VscServerProcess),
		S.divider(),

		list(S, 'Blog posts', 'blog.post').icon(VscRadioTower),
		list(S, 'Blog categories', 'blog.category').icon(VscTag),
		list(S, 'Blog authors', 'blog.author').icon(VscPerson),
	])

export default structure
