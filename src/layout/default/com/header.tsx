import { Navbar, NavbarDivider, NavbarGroup, NavbarHeading } from '@blueprintjs/core'
import * as classnames from 'classnames'
import * as React from 'react'
import { match } from 'react-router'
import { Link } from 'react-router-dom'
import { compose, pure } from 'recompose'
import { concatPath } from 'util/route'
import { Breadcrumb } from './breadcrumb'
import { MenuContent } from './menuContent'
import { SearchBox } from './searchBox'
import { UserBox } from './userBox'
interface IHeader {
	url: string
}

const HeaderView = ({ url }: IHeader) => {
	return (
		<Navbar className={classnames('p-h-md')}>
			<NavbarGroup className={classnames('c-nav__group')}>
					<NavbarHeading>
						<Link to={concatPath(url)('/')}>
							LOGO HERE
						</Link>
					</NavbarHeading>
					<NavbarDivider />
					<MenuContent />
					<NavbarDivider />
					<Breadcrumb />
				<div className="c-nav__avatar-container">
					<SearchBox />
					<UserBox />
				</div>
			</NavbarGroup>
		</Navbar>
	)
}

export const Header = compose<IHeader, IHeader>(pure)(HeaderView)
