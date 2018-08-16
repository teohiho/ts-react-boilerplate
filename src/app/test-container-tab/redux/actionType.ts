import { generateActionTypeList } from 'util/redux/actionType'

const type = 'testContainerTab'

export default generateActionTypeList(type, { actionType: [
	'CHANGE_TEST_CONTAINER_TAB',
	'CHANGE_TEST_CONTAINER_TAB_SAGA',
] })
