import { generateActionTypeList } from 'util/redux/actionType'

const type = 'animationSample'

export default generateActionTypeList(type, { actionType: [
	'CHANGE_ANIMATION_SAMPLE',
	'CHANGE_ANIMATION_SAMPLE_SAGA',
] })
