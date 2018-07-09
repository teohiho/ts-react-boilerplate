import { compose, map, mapObjIndexed, omit, values } from 'ramda'
import * as React from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps, Switch } from 'react-router'

import { Theme, withStyles, WithStyles } from '@material-ui/core'
import createStyles from '@material-ui/core/styles/createStyles'
import { createBrowserHistory } from 'history'
import {
  BrowserRouter,
  Route,
  Router } from 'react-router-dom'
import { TRootState } from '../conf/redux/reducer'
import { getPageList } from '../helper/module'
// import { RootState } from '../reducers';
import DashBoard from '../layout/Dashboard'
const hist = createBrowserHistory()

const pages = getPageList()

export namespace AppRouter {
  export interface Props extends RouteComponentProps<void>, WithStyles<typeof styles> {
  }

  export interface State {
	open: boolean
  }
}

class AppRouter extends React.Component<AppRouter.Props, AppRouter.State> {
  renderDashBoard = (props: any) => {

	const convertRouteComponent = mapObjIndexed((page: any, key: string) => (
		<Route
		{...page}
		key={key}
		/>
	))
	const routesRender = compose(values, convertRouteComponent)(pages)

	const pageIgnore = [
		'todoSingle',
	]
	const slidebarRoutes = compose(values, omit(pageIgnore))(pages)
	return (
		<DashBoard routes={values(pages)} {...props} >
		<Switch>
			{routesRender}
		</Switch>
		</DashBoard>
	)
  }
  render() {
	// Switch case layout
	return (
		<div className={this.props.classes.body}>
		<Router history={hist}>
			<Switch>
			<Route path={''} render={this.renderDashBoard}>
			</Route>
			</Switch>
		</Router>
		</div>
	)
  }
}
const styles = (theme: Theme) => createStyles({
  body: {
  },
})
const mapStateToProps = (state: TRootState, props: any) => ({

})
export const AppRoute = withStyles(styles)(connect(mapStateToProps)(AppRouter))
