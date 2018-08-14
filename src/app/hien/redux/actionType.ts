import { generateActionTypeList } from 'util/redux/actionType'

const type = 'hien'

export default generateActionTypeList(type, { actionType: [
	'CHANGE_HIEN',
	'CHANGE_HIEN_SAGA',
] })
