import { generateActionTypeList } from 'util/redux/actionType'

const type = 'cv'

export default generateActionTypeList(type, { actionType: [
	'CHANGE_CV',
	'CHANGE_CV_SAGA',
] })
