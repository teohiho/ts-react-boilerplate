import { path } from 'ramda'

export type SelectorTodo = ReturnType<typeof make>

const make = (
	local: string[]) => {
		const resourceLocal = (specificPath: string[]) => path([...local, ...specificPath])
		return {
			listSelector: resourceLocal(['list']),
			itemSelector: (id: string) => resourceLocal(['resource', id]),
		}
	}

export default {
	make,
}
