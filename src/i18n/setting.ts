import { addLocaleData } from 'react-intl'
import * as en from 'react-intl/locale-data/en'
import * as vi from 'react-intl/locale-data/vi'

// TODO: Make lazy load when user request

export const settingI18nLanguage = () => {
	addLocaleData([...en, ...vi])
}
