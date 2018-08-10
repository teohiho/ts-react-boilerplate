import { SamplePage } from './Sample.page'
import { SampleNoTab } from './SampleNoTab.page'
import { SampleOOPPage } from './SampleOOP'

export const page = {
	route: {
		sampleNoTab: {
			path: '/sample-no-tab',
			component: SampleNoTab,
		},
		sample: {
			path: '/sample',
			component: SamplePage,
		},
		sampleOop: {
			path: '/sample-oop',
			component: SampleOOPPage,
		},
	},
}
