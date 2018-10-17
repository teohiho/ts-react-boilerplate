import { compose, filter, flatten, identity, isNil, mapObjIndexed, mergeAll, path, values } from 'ramda'
// import { RouteProps } from 'react-router'
import app from './index'

// interface IRoute extends RouteProps{}

// `flatten` that means array is only 1 demention
// For example of flatten: [{}, {}, {}]
// `dict` is obj
// {a:{}, b:{}}
// `dict-flatten`
// dict-flatten is object and flatten values
type TReduxType = 'reducer' | 'saga'
type TAppType = 'dict' | 'flatten' | 'dict-flatten'


const removeUndefinedItem = filter((item: any) => !isNil(item))


const getSpecificData = (appList: typeof app, pathList: string[], type: TAppType= 'dict') => {
	const getSpecificDataList = compose(
		// Remove items which undefined
		removeUndefinedItem,
		// Get data from path
		mapObjIndexed(
			compose(
				// Convert {} => [] by only get key
				(data: any) => { // Check if item undefined
					if (data !== undefined && type === 'flatten') {
						return values(data)
					}
					return identity(data)
				} ,
				// removeUndefinedItem,
				// point to path that we need to query
				path(pathList),
			),
		),
	)
	const addFlatten = compose(flatten, values)
	return compose(
		type === 'flatten' ? addFlatten : identity,
		type === 'dict-flatten' ? compose(mergeAll, values) : identity,
		getSpecificDataList,
	)(appList)
}

const getRouteList = (appList = app) => getSpecificData(appList, ['route'], 'dict-flatten')
const getReduxModule = (reduxType: TReduxType, appList = app) => getSpecificData(appList, [reduxType])

const routeCollection = getRouteList()
const reducerCollection = getReduxModule('reducer')
const sagaCollection = getReduxModule('saga')

export {
	getRouteList,
	getReduxModule,
	routeCollection,
	sagaCollection,
	reducerCollection,
}
