import classnames from 'classnames'
import React, { memo } from 'react'
import setting from 'conf/setting'
import { compose } from 'recompose'
import { concatPath } from 'util/route'
import { Link } from 'react-router-dom'
import {
	Breadcrumb,
	Menu,
	Searchbox,
	Userbox,
} from '../../molecule/'
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
							{setting.appName.toUpperCase()}
						</Link>
					</NavbarHeading>
					<NavbarDivider />
					<Menu />
					<NavbarDivider />
					<Breadcrumb />
				<div className="c-nav__avatar-container">
					<Searchbox />
					<Userbox />
				</div>
			</NavbarGroup>
		</Navbar>
	)
}
export default compose<IHeader, IHeader>(memo)(HeaderView)
