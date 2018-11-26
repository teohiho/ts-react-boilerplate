import Auth from '../page/auth'
import Dashboard from '../page/dashboard'

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
}
