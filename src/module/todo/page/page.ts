import TodoPage from './Todo.page'

export const page = {
  route: {
    path: '/todo',
    exact: true,
    component: TodoPage,
    sidebarName: 'Todo',
    navBarName: 'Todo',
  },
}
