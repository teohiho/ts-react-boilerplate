import { generateActionTypeList } from 'util/redux/actionType'

const ACTION_TYPE = [
  'CHANGE_THEME',
]

export default generateActionTypeList('app', { actionType: ACTION_TYPE })
