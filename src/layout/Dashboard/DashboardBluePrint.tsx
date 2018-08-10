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
import { compose, pure, withState, withStateHandlers } from 'recompose'
import { MainTab } from './MainTab'
import { MenuContent } from './MenuContent'
import { SearchBox } from './SearchBox'
import { UserBox } from './UserBox'
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
interface IMenuPropsIn extends IMenuPropsOut, IMenuState, IMenuHandler {

}


interface IDashboardPropsIn {
	children: any
}
const DashBoard = ({ children }: IDashboardPropsIn) => (
	<div className={styles.dashboardApp}>
	 	<Navbar>
			<NavbarGroup className={classnames('c-nav__group')}>
					<NavbarHeading>
						LOGO HERE
					</NavbarHeading>
					<NavbarDivider />
					<MenuContent />
					<SearchBox />
				<div className="c-nav__avatar-container">
					<UserBox />
				</div>
			</NavbarGroup>
		</Navbar>
		<Card className={`${styles.dashboardApp}__card`}>
			<>
				{children}
			</>
		</Card>
	</div>
)

export const DashBoardBluePrint = compose()(DashBoard)
