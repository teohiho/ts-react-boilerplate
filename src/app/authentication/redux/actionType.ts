import { generateActionTypeList } from 'util/redux/actionType'

const type = 'authentication'

export default generateActionTypeList(type, { actionType: [
	'CHANGE_AUTHENTICATION',
	'CHANGE_AUTHENTICATION_SAGA',
] })
