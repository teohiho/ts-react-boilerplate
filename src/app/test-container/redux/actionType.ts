import { generateActionTypeList } from 'util/redux/actionType'

const type = 'testContainer'

export default generateActionTypeList(type, { actionType: [
	'CHANGE_TEST_CONTAINER',
	'CHANGE_TEST_CONTAINER_SAGA',
] })
