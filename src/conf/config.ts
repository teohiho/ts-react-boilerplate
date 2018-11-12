import { settingI18n } from './i18n/i18n'
import { settingLogrocket } from './debug/logrocket'

export const settingConfiguration = () => {
	settingI18n()
	settingLogrocket()
}
