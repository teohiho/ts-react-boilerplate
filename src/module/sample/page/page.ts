import SamplePage from './Sample.page'

export const page = {
  route: {
	sample: {
		path: '/sample',
		exact: true,
		component: SamplePage,
		sidebarName: 'Sample',
		sidebarI18nId: 'Sample.title',
		navBarI18nId: 'Sample.title',
		navBarName: 'Sample',
	},
  },
}
