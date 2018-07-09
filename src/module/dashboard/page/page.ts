import Dashboard from './Dashboard.page'

export const page = {
  route: {
	dashboard: {
		path: '/dashboard',
		exact: true,
		component: Dashboard,
		sidebarName: 'Dashboard',
		navBarName: 'Dashboard',
		sidebarI18nId: 'Dashboard.title',
		navBarI18nId: 'Dashboard.title',
	},
  },
}
