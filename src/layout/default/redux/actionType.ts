import { generateActionTypeList } from 'util/redux/actionType'

const type = 'layout'

export default generateActionTypeList(type, { actionType: [
	'UPDATE_NAV',
] })
