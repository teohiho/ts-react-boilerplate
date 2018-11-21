import React from 'react'
import { compose, onlyUpdateForKeys, pure } from 'recompose'
import { Footer } from './com/footer'
import { Header } from './com/header'
import { RouteComponentProps, Switch } from 'react-router'

import {
	FocusStyleManager,
} from '@blueprintjs/core'

const  styles = require('./scss/style.scss')

// TYPE 1ST

interface IDashboardPropsOut {
	url: string
}
interface IDashboardPropsIn extends IDashboardPropsOut{
	children: Switch
}

// RUNTIME CODE

// Remove the blue out line when active element
// Related: https://github.com/palantir/blueprint/issues/2755
FocusStyleManager.onlyShowFocusOnTabs()

const Dashboard = ({ children, url }: IDashboardPropsIn) => {
	return (
		<div className={styles.dashboardApp}>
			<Header
			 	url={url}
			 />
			{children}
			<Footer />
		</div>
	)
}
// const retrictRenderChild = onlyUpdateForKeys(['url'])
export const DashboardBluePrint = compose<IDashboardPropsIn, IDashboardPropsOut>(pure)(Dashboard)
