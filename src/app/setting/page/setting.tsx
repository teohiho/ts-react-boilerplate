import React from 'react'
import { addBreadcrumb, addTabContainer } from 'layout/default/'
import { compose, pure } from 'recompose'
import { FormattedMessage } from 'react-intl'
import { Language, Theme } from '../com/'


const addTab = addTabContainer({
	tabs: {
		'': {
			component: Theme,
			title: <FormattedMessage id="setting.theme" />,
			exact: true,
		},
		'/language': {
			component: Language,
			title: <FormattedMessage id="setting.language" />,
		},
	},
})

export const SettingPage = compose(
	addBreadcrumb(['Setting']),
)(addTab)
