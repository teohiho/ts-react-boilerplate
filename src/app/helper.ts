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
type TReduxType = 'reducer' | 'action' | 'saga'
type TAppType = 'dict' | 'flatten' | 'dict-flatten'


const removeUndefinedItem = filter((item: any) => !isNil(item))

const getSpecificData = (appList: typeof app, pathList: string[], type: TAppType= 'dict') => {
	const getSpecificDataList = compose(
		// Remove items which undefined
		removeUndefinedItem,
		// Get data from path
		mapObjIndexed(
			compose(
				// point to path that we need to querry
				path(pathList),
			),
		),
	)
	const flatten2lvl = compose(values, mergeAll, values)
	return compose(
		type === 'flatten' ? flatten2lvl : identity,
		type === 'dict-flatten' ? compose(mergeAll, values) : identity,
		getSpecificDataList,
	)(appList)
}
const getRouteList = (appList = app) => getSpecificData(appList, ['route'], 'flatten')
const getReduxModule = (reduxType: TReduxType, appList = app) => getSpecificData(appList, [reduxType])
export {
	getRouteList,
	getReduxModule,
}
