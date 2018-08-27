import {
	Button,
	Card,
	Classes,
	Dialog,
	FocusStyleManager,
	Navbar,
	NavbarDivider,
	NavbarGroup,
	NavbarHeading,
	Popover,
} from '@blueprintjs/core'
import * as classnames from 'classnames'
import * as React from 'react'
import { RouteComponentProps, Switch } from 'react-router'
import { Link } from 'react-router-dom'
import { compose, onlyUpdateForKeys, pure } from 'recompose'
import { makeUpdatePath } from 'util/route'
import { withPropsChecker } from '../../util/react'
import { Breadcrumb } from './com/breadcrumb'
import { Footer } from './com/footer'
import { Header } from './com/header'
import { MenuContent } from './com/menuContent'
import { SearchBox } from './com/searchBox'
import { UserBox } from './com/userBox'

const  styles = require('./scss/style.scss')

// Remove the blue out line when active element
// Related: https://github.com/palantir/blueprint/issues/2755
FocusStyleManager.onlyShowFocusOnTabs()

interface IDashboardPropsOut {
	url: string
}
interface IDashboardPropsIn extends IDashboardPropsOut{
	children: Switch
}
const DashBoard = ({ children, url }: IDashboardPropsIn) => {
	return (
		<div className={styles.dashboardApp}>
			<Header url={url} />
			{children}
			<Footer />
		</div>
	)
}
// const retrictRenderChild = onlyUpdateForKeys(['url'])
export const DashBoardBluePrint = compose<IDashboardPropsIn, IDashboardPropsOut>(pure)(DashBoard)
