import { SettingLanguage } from './com/setting-language'
import { nav } from './conf/nav'
import { route } from './conf/route'
import * as action from './redux/action'
import reducer from './redux/reducer'

export default {
	// Component
	SettingLanguage,

	// Config
	route,
	nav,

	// Redux
	action,
	reducer,
}
