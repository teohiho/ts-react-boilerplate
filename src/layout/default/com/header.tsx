import { Navbar, NavbarDivider, NavbarGroup, NavbarHeading } from '@blueprintjs/core'
import { compose, pure } from 'recompose'

import { Breadcrumb } from './breadcrumb'
import { Link } from 'react-router-dom'
import { MenuContent } from './menuContent'
import React from 'react'
import { SearchBox } from './searchBox'
import { UserBox } from './userBox'
import classnames from 'classnames'
import { concatPath } from 'util/route'
import { match } from 'react-router'

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
