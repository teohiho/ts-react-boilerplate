import { compose, map, path, filter, isNil, values, mergeAll, pick } from 'ramda'
// tslint:disable-next-line:no-duplicate-imports

import { module } from '../module/module'

interface IOptionType {
  type?: 'array' | 'flatten' | 'list'
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
interface IListModule {
  [key: string]: IModuleType
}

type ReduxKey = 'reducer' | 'action' | 'saga'

export const pathDict = (data: typeof module, rootPath: string[], options: IOptionType = {}) => {
  const { type } = options
  const getListData = map((eachModule: IModuleType) => path(rootPath)(eachModule))
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
export const getPageList = () => pathDict(module, ['page', 'route'], { type: 'array' })
export default { getSpecificModuleRedux, getPageList }


const reducerData = getSpecificModuleRedux('reducer')


const pickAB = pick<'1', 'general'>()(['a', 'b'])

pickAB({ a: 1, c: 3 })
