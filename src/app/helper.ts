import reduxUtil from 'redux-packaged'
import sample from './sample'
import { Reducer } from 'redux'
import { RouteProps } from 'react-router'
import {
	mapObjIndexed,
} from 'ramda'

// import app from './index'

const app = {
	sample,
}

type RouteConfig = {
	[id: string]: RouteProps,
}

type Redux = {
	reducer: Reducer,
	actionType: any,
	action: any,
	saga?: any,
	selector?: any,
}
interface IRegisterModule<R extends Redux, RO extends RouteConfig, C> {
	redux: R | undefined
	route: RO
	com: C | undefined
}

// runtime code
const registerModule = <C, RO extends RouteConfig, R extends Redux>(routeConfig: RO, component?: C, redux?: R) => {
	return {
		redux,
		route: routeConfig,
		com: component,
	}
}

const getPart = <R extends Redux,
				RO extends RouteConfig,
				C,
				T extends {[N in keyof T]: IRegisterModule<R, RO, C > },
				K extends keyof IRegisterModule < R, RO, C >
				>

	(part: K, app: T) => {
		return mapObjIndexed(module => module[part], app) as {[N in keyof T]: T[N][K]}
	}

const getRoute =  <R extends Redux, RO extends RouteConfig, C, T extends {[N in keyof T]: IRegisterModule<R, RO, C > }>
	(app: T) => getPart('route', app)
const getRedux =  <R extends Redux, RO extends RouteConfig, C, T extends {[N in keyof T]: IRegisterModule<R, RO, C > }>
	(app: T) => getPart('redux', app)
const getCom =  <R extends Redux, RO extends RouteConfig, C, T extends {[N in keyof T]: IRegisterModule<R, RO, C > }>
	(app: T) => getPart('com', app)

const routeCollection = getRoute(app)
const reduxApp = getRedux(app)
const comCollection = getCom(app)
const reducerCollection = reduxUtil.reducer.get(reduxApp)
const sagaCollection = reduxUtil.saga.get(reduxApp)

export {
	// getRouteList,
	// getReduxModule,
	routeCollection,
	comCollection,
	sagaCollection,
	reducerCollection,
	registerModule,
}
