import * as R from 'ramda'
import { addPrefix } from './name'
import { getRule } from './rule'

const makeGetActionType = (nameModule: string, appName= '@@app') => {
  return (nameAction: string) => `${addPrefix(nameModule, appName)}${nameAction.toUpperCase()}/`
}

interface IGenerateActionTypeOption {
  actionType?: string[],
  groupName?: string,
  appName?: string,
}

const generateActionTypeList = (nameModule: string, options: IGenerateActionTypeOption) => {
  const { actionType, appName, groupName } = options
  const rules = getRule(actionType, groupName)
  const getActionType = makeGetActionType(nameModule, appName)
  return R.compose(R.mergeAll, R.map((key: string) => ({ [key]: getActionType(key) })))(rules)
}

export {
  generateActionTypeList,
}
