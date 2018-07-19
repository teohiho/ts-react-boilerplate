import TodoPage from './Todo.page'
import TodoSinglePage from './TodoSingle.page'

export const page = {
  route: {
	todo: {
		path: '/todo',
		exact: true,
		component: TodoPage,
		sidebarName: 'Todo',
		sidebarI18nId: 'Todo.title',
		navBarName: 'Todo',
		navBarI18nId: 'Todo.title',
	},
	todoSingle: {
		path: '/todo/:id',
		// exact: true,
		component: TodoSinglePage,
		// sidebarName: 'Todo Single',
		// sidebarI18nId: 'Todo.title',
		navBarName: 'Todo Single',
		// navBarI18nId: 'Todo.title',
	},
  },
}
