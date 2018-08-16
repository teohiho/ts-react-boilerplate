import { generateActionTypeList } from 'util/redux/actionType'

const type = 'testTab'

export default generateActionTypeList(type, { actionType: [
	'CHANGE_TEST_TAB',
	'CHANGE_TEST_TAB_SAGA',
] })
