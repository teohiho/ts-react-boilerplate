import SamplePage from './Sample.page'

export const page = {
  route: {
    sample: {
      path: '/sample',
      exact: true,
      component: SamplePage,
      sidebarName: 'Sample',
      navBarName: 'Sample',
    },
  },
}
