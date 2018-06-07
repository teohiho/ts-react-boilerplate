import { compose, map, path, filter, isNil, values, mergeAll } from 'ramda'

import { module } from '../module/module'

interface OptionType {
  type?: string
}
interface ReduxType {
  reducer?: Function,
  saga?: Function,
  thunk?: Function
}
interface PageType {
  [key: string]: any,
}
interface PageListType {
  [key: string]: PageType
}
interface ModuleType {
  redux?: ReduxType,
  page?: PageListType
}
interface ListModule {
  [key: string]: ModuleType
}



export const pathDict = (data: ListModule, getPath: Function, options: OptionType = {}) => {
  const { type } = options
  const getListData = map((eachModule: ModuleType) => path(getPath())(eachModule))
  const removeUndefinedItem = filter((item: any) => !isNil(item))
  const listCompose = compose(removeUndefinedItem, getListData)
  switch (type) {
    case 'array': return compose(values, listCompose)(data)
    case 'flatten': return compose(mergeAll, values, listCompose)(data)
    case 'list':
    default: return listCompose(data)
  }
}

export const getSpecificModuleRedux = <T>(key: string, options?: OptionType) => pathDict(module, () => ['redux', key], options)
export const getPageList = () => pathDict(module, () => ['page', 'route'], { type: 'array' })
export default { getSpecificModuleRedux, getPageList }