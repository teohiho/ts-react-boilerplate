import HomePage from './Home.page'

export const page = {
  route:{
	home: {
		path: '/',
		exact: true,
		component: HomePage,
		sidebarName: 'Home',
		sidebarI18nId: 'Home.title',
		navBarName: 'Home',
		navBarI18nId: 'Home.title',
	},
  },
}
