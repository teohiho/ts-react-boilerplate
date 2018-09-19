import { TiflClientTestPage } from '../page/tiflClientTest'
import { TiflClientTestPage2 } from '../page/tiflClientTest2'

export const route = {
	tiflClientTest: {
		path: '/tifl-test',
		component: TiflClientTestPage,
	},
	tiflClientTest2: {
		path: '/tifl-test2',
		component: TiflClientTestPage2,
	},
}
