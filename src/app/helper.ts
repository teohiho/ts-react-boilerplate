import * as R from 'ramda'
import objectUtil from 'util/object'
import { Reducer } from 'redux'
import { RouteProps } from 'react-router'


type IRegisterModule<R, RO, C> = {
	redux?: R,
	route?: RO,
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
		const partModule = R.mapObjIndexed(module => module[part], app)
		return objectUtil.removeUndefined(partModule) as {
			[N in keyof T]: T[N] extends undefined ? never : T[N][K] extends undefined ? never : T[N][K]
		}
	}
const getRoute =  <R, RO extends object, C, T extends {[N in keyof T]: IRegisterModule<R, RO, C> }>
	(app: T) => {
		const appRoute = getPart('route', app)
		const routeCollection = R.values(appRoute)
		const path: string[] = []
		let index: number = -1
		const mergeRoute = R.reduce(
			(previous, value: {[id: string]: RouteProps} | undefined) => {
				R.keys(value).forEach((key) => {
					index++
					// Check same key
					if (R.has(key, previous)) {
						console.warn('WARN: Key is dupplicate: "', key, '"')
					}
					// check path
					if (!value || value[key].path === undefined) {
						console.warn('WARN: Path is not exist. Please check route with key:', R.keys(appRoute)[index], ' > ', key)
					} else if (path.indexOf(value[key].path as string) !== -1) {
						console.warn(
							'WARN: Path "',
							value && value[key].path,
							'" is dupplicate. Please check route with key "',
							R.keys(appRoute)[index], ' > ',
							key,
							)
					} else {
						console.log('Registering path', value[key].path)
						path.push(value[key].path as string)
					}
				})
				return {
					...previous,
					...value,
				}
			},
			{},
			routeCollection)
		return mergeRoute
	}

// @TODO: Curry will not support typescript
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
