import { HienPage } from './Hien.page'

export const page = {
  route: {
	hien: {
		path: '/hien',
		exact: true,
		component: HienPage,
		sidebarName: 'HienPage',
		navBarName: 'HienPage',
		sidebarI18nId: 'HienPage.title',
		navBarI18nId: 'HienPage.title',
	},
  },
}
