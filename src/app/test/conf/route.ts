import { TestPanel } from '../page/panel'
import { TestPage } from '../page/test'

export const route = {
	test: {
		path: '/test',
		component: TestPage,
	},
	panel: {
		path: '/panel',
		component: TestPanel,
	},
}
