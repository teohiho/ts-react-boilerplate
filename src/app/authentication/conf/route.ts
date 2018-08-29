import { AuthenticationPage } from '../page/authentication'
import { SampleFormik } from '../page/sampleFormik'

export const route = {
	authentication: {
		path: '/authentication',
		component: AuthenticationPage,
	},
	sampleFormik: {
		path: '/formik',
		component: SampleFormik,
	},
}
