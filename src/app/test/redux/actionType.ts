import { generateActionTypeList } from 'util/redux/actionType'

const type = 'test'

export default generateActionTypeList(type, { actionType: [
	'CHANGE_TEST',
	'CHANGE_TEST_SAGA',
] })
