import { compose, filter, flatten, isNil, map, mapObjIndexed, mergeAll, path, values } from 'ramda'
import { RouteProps } from 'react-router'
import app from './index'

interface IRoute extends RouteProps{}

// Flatten that means array is only 1 lvl
// Dict is obj
type TAppType = 'dict' | 'flatten'
type TReduxType = 'reducer' | 'action' | 'saga'
interface IApp {
	route?: IRoute
}

type TGetRouteList = (appList?: typeof app) => IRoute[]

// const pointToRoute = path(['route'])
// console.log('APP', app)
const removeUndefinedItem = filter((item: any) => !isNil(item))

// const getRouteList:TGetRouteList = (appList = app) => {
// 	return compose(
// 		flatten,
// 		values,
// 		mapObjIndexed(compose(values, removeUndefinedItem, pointToRoute)),
// 	)(appList)
// }

// type TGetReduxModule<T = typeof app, K = keyof T> = (type: TReduxType, appList?: T) => { [key: string]: any }
// const pointToModuleOfRedux = (type: TReduxType) => path([type])

// const getReduxModule: TGetReduxModule = (type, appList = app) => {
// 	return compose(
// 		mapObjIndexed(
// 			compose(
// 				removeUndefinedItem,
// 				pointToModuleOfRedux(type),
// 			),
// 		),
// 	)(appList)
// }

// const handleDataDependType = (type: TAppType) => {
// 	if (type === 'flatten') {
// 		return compose(flatten, values)
// 	}
// 	if (type === 'dict') {
// 		return null
// 	}
// }
const getSpecificData = (appList: typeof app, pathList: string[], type: TAppType= 'dict') => {
	const getSpecificDataList = compose(
		// Remove items which undefined
		removeUndefinedItem,
		// Get data from path
		mapObjIndexed(
			// point to path that we need to querry
			path(pathList),
		),
	)
	// const convertDataType = handleDataDependType(type)
	if (type === 'flatten') {
		return compose(compose(flatten, values), getSpecificDataList)(appList)
	}
	return 	getSpecificDataList(appList)
}

const getRouteList = (appList = app) => getSpecificData(appList, ['route'], 'flatten')
const getReduxModule = (reduxType: TReduxType, appList = app) => getSpecificData(appList, [reduxType])
export {
	getRouteList,
	getReduxModule,
}
