import classnames from 'classnames'
import React, { memo, PureComponent } from 'react'
import { Breadcrumb } from './breadcrumb'
import { compose, pure, shouldUpdate } from 'recompose'
import { concatPath } from 'util/route'
import { Link } from 'react-router-dom'
import { match } from 'react-router'
import { MenuContent } from './menuContent'
import { SearchBox } from './searchBox'
import { UserBox } from './userBox'
import {
	Navbar,
	NavbarDivider,
	NavbarGroup,
	NavbarHeading,
} from '@blueprintjs/core'


interface IHeader {
	url?: string
}

const HeaderView = ({ url = '/' }: IHeader) => {
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
export const Header = compose<IHeader, IHeader>(memo)(HeaderView)
