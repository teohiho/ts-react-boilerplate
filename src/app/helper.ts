import { Reducer } from 'redux'
import { RouteProps } from 'react-router'
import {
	mapObjIndexed,
	mergeAll,
	values,
} from 'ramda'


// import app from './index'
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

type RouteConfig = {
	[id: string]: RouteProps,
}

interface IRedux {
	reducer: Reducer,
	actionType: any,
	action: any,
	saga?: any,
	selector?: any,
}
type IRegisterModule<R, RO, C> = {
	redux?: R,
	route: RO,
	com?: C,
}

// runtime code
function registerModule<C, RO, R>(routeConfig?: RO, component?: C, redux?: R) {
	return {
		redux,
		route: routeConfig,
		com: component,
	} as {
		redux: R extends undefined ? undefined : R,
		route: RO extends undefined ? undefined : RO,
		com: C extends undefined ? undefined : C,
	}
}


const getPart = <R,
				RO,
				C,
				T extends {[N in keyof T]: IRegisterModule<R, RO, C > },
				K extends keyof IRegisterModule < R, RO, C >
				>

	(part: K, app: T) => {
		return mapObjIndexed(module => module[part], app) as {[N in keyof T]: T[N][K]}
	}

// @TODO: Curry will not support typescript
const getRoute =  <R, RO extends object, C, T extends {[N in keyof T]: IRegisterModule<R, RO, C> }>
	(app: T) => mergeAll(values(getPart('route', app)))
const getRedux =  <R, RO, C, T extends {[N in keyof T]: IRegisterModule<R, RO, C > }>
	(app: T) => getPart('redux', app)
const getCom =  <R, RO, C, T extends {[N in keyof T]: IRegisterModule<R, RO, C > }>
	(app: T) => getPart('com', app)

export {
	registerModule,
}
export default {
	getRoute,
	getRedux,
	getCom,
	registerModule,
}
