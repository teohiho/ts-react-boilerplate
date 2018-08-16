import { generateActionTypeList } from 'util/redux/actionType'

const type = 'layout'

export default generateActionTypeList(type, { actionType: [
	'CHANGE_LAYOUT',
	'CHANGE_LAYOUT_SAGA',
] })
