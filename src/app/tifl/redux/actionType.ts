import { generateActionTypeList } from 'util/redux/actionType'

const type = 'tiflClientTest'

export default generateActionTypeList(type, { actionType: [
	'CHANGE_TIFL_CLIENT_TEST',
	'CHANGE_TIFL_CLIENT_TEST_SAGA',
] })
