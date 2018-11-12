import { RouteComponentProps, Switch } from 'react-router'
import { compose, onlyUpdateForKeys, pure } from 'recompose'

import {
	FocusStyleManager,
} from '@blueprintjs/core'
import { Footer } from './com/footer'
import { Header } from './com/header'
import React from 'react'
import classnames from 'classnames'

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

const DashBoard = ({ children, url }: IDashboardPropsIn) => {
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
export const DashBoardBluePrint = compose<IDashboardPropsIn, IDashboardPropsOut>(pure)(DashBoard)
