import Login from '../page/login'
import Organization from '../page/organization'

export default {
	org: {
		path: '/org',
		component: Organization,
	},
	login: {
		path: '/auth',
		component: Login,
		exact: true,
	},
}
