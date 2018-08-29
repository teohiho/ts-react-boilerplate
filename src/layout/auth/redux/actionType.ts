import { generateActionTypeList } from 'util/redux/actionType'

const type = 'authentication'

export default generateActionTypeList(type, { actionType: [
	'LOGIN',
] })
