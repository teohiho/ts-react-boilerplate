import { compose, map, path, filter, isNil, values, mergeAll, pick, mapObjIndexed } from 'ramda'
// tslint:disable-next-line:no-duplicate-imports

import { module } from '../module/module'

interface IOptionType {
  type: 'array' | 'flatten' | 'list'
}
interface IReduxType {
  reducer?: Function,
  saga?: Function,
  thunk?: Function
}
interface IPageType {
  [key: string]: any,
}
interface IPageListType {
  [key: string]: IPageType
}
interface IModuleType {
  redux?: IReduxType,
  page?: IPageListType
}

type ReduxKey = 'reducer' | 'action' | 'saga'


// export const pathDict = (data: typeof module, rootPath: string[], options: IOptionType = {}) => {
// function pathDict(data: typeof module, rootPath: string[], options: {type: 'array'}): any[]
function pathDict(data: typeof module, rootPath: string[], options: IOptionType = { type: 'list' }) {
  const { type } = options
  const getListData = mapObjIndexed((eachModuleValue: IModuleType) => path(rootPath)(eachModuleValue))
  const removeUndefinedItem = filter((item: any) => !isNil(item))
  const listCompose = compose(removeUndefinedItem, getListData)
  switch (type) {
    case 'array': return compose(values, listCompose)(data)
    case 'flatten': return compose(mergeAll, values, listCompose)(data)
    case 'list':
    default: return listCompose(data)
  }
}


export const getSpecificModuleRedux = (key: ReduxKey, options?: IOptionType) => pathDict(module, ['redux', key], options)
export const getPageList = () => <any[]>pathDict(module, ['page', 'route'], { type: 'array' })
export default { getSpecificModuleRedux, getPageList }

