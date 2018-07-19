import Setting from './Setting.page'

export const page = {
	route: {
		app: {
			path: '/setting',
			exact: true,
			component: Setting,
			sidebarName: 'Setting',
			sidebarI18nId: 'Setting.title',
			navBarName: 'Setting',
			navBarI18nId: 'Setting.title',
		},
	},
}
