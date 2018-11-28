import Auth from '../page/auth'
import Dashboard from '../page/dashboard'
import Test from '../page/test'

export default {
	idtv: {
		path: '/idtv',
		component: Dashboard,
		exact: true,
	},
	idtvAuth: {
		path: '/idtv/auth',
		component: Auth,
	},
	idtvTest: {
		path: '/idtv/test',
		component: Test,
	},
}
