import { settingI18nLanguage } from 'i18n/setting'
import { settingLogrocket } from '../debug/logrocket'

export const settingI18n = () => {
	// import done for you
	settingI18nLanguage()
	settingLogrocket()
}
