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
import { compose } from 'recompose'
import { Footer } from './com/footer'
import { MenuContent } from './com/menuContent'
import { SearchBox } from './com/searchBox'
import { UserBox } from './com/userBox'

const  styles = require('./layoutDefault.scss')

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
				<div className="c-nav__avatar-container">
					<SearchBox />
					<UserBox />
				</div>
			</NavbarGroup>
		</Navbar>
		<div className={classnames('p-h-md', 'p-v-sm', `${styles.dashboardApp}__body`)}>
			{children}
		</div>
		<Footer />
	</div>
)

export const DashBoardBluePrint = compose()(DashBoard)
