import TodoPage from './Todo.page'

export const page = {
  route: {
    path: '/todo',
    exact: true,
    component: TodoPage,
    sidebarName: 'Todo',
    sidebarI18nId: 'Todo.title',
    navBarName: 'Todo',
    navBarI18nId: 'Todo.title',
  },
}
