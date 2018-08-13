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
import { Switch } from 'react-router'
import { Link } from 'react-router-dom'
import { compose, pure, withState, withStateHandlers } from 'recompose'
import { MainTab } from './com/MainTab'
import { MenuContent } from './com/MenuContent'
import { SearchBox } from './com/SearchBox'
import { UserBox } from './com/UserBox'

const  styles = require('./DashboardBluePrint.scss')

// Remove the blue out line when active element
// Related: https://github.com/palantir/blueprint/issues/2755
FocusStyleManager.onlyShowFocusOnTabs()


interface IMenuPropsOut {

}
interface IMenuState {
	isOpen: boolean
}
interface IMenuHandler {
	popUpMenu: () => void
}

interface IMenuPropsIn extends IMenuPropsOut, IMenuState, IMenuHandler {}

interface IDashboardPropsIn {
	children: Switch
}

const DashBoard = ({ children }: IDashboardPropsIn) => (
	<div className={styles.dashboardApp}>
	 	<Navbar className={classnames('p-h-md')}>
			<NavbarGroup className={classnames('c-nav__group')}>
					<NavbarHeading>
						<Link to="/">
							LOGO HERE
						</Link>
					</NavbarHeading>
					<NavbarDivider />
					<MenuContent />
					<SearchBox />
				<div className="c-nav__avatar-container">
					<UserBox />
				</div>
			</NavbarGroup>
		</Navbar>
		<div className={classnames('p-h-md', 'p-v-sm', `${styles.dashboardApp}__body`)}>
			{children}
		</div>
	</div>
)

export const DashBoardBluePrint = compose()(DashBoard)
