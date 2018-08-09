import { ManPage } from './Man.page'

export const page = {
	route: {
		man: {
			path: '/man',
			exact: true,
			component: ManPage,
		},
	},
}
