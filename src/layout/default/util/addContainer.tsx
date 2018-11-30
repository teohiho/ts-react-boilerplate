import addBreadcrumb from './addBreadcrumb'
import classnames from 'classnames'
import React, { memo } from 'react'
import { identity, path } from 'ramda'

import {
	compose,
} from 'recompose'

// TYPE 1ST

type ContainerProps = {
	breadcrumbItems?: string[],
	classes?: {
		container?: string,
	},
}



// RUNTIME CODE

export default (options: ContainerProps = {}) => {
	return compose(
		addContainerClassName(options && options.classes && options.classes.container),
		options.breadcrumbItems ? addBreadcrumb(options.breadcrumbItems) : identity,
	)
}

export const addContainerClassName = (className?: string) => (BaseComponent: React.ComponentType) => () => (
	<div className={classnames('p-h-md', 'u-flex--1',  't-background', className)}>
		<BaseComponent />
	</div>
)
