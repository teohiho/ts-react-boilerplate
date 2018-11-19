import classnames from 'classnames'
import React from 'react'
import redux from './redux/'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { identity, path } from 'ramda'
import {
	compose,
	lifecycle,
	pure,
} from 'recompose'


// TYPE 1ST

interface IContaienrReduxActions {
	updateBreadcrumb: (items: string[]) => void
}

interface IContainerPropsOut extends IBreadCrumbPropsOut{

}

interface IContainerPropsIn extends IContainerPropsOut, IContaienrReduxActions {
	children: any,
}

interface IContainerState {}

interface IBreadCrumbPropsOut {
	breadcrumbItems: string[],
}

interface IContainerProps {
	breadcrumbItems?: string[],
	classes?: {
		container?: string,
	}
}

const mapActionToProps = (dispatch: Dispatch) => ({
	updateBreadcrumb: (items: string[]) => dispatch(redux.actionCollection.updateNavbar(items)),
})


// RUNTIME CODE

// TODO: Try to run `breadcrumbItems` at begin lifecycle(constructor in case) in fp but still not work. That why move to class
// Check this commit: 181227922503bd0ae1452deca2282598b77fd4a3
const addBreadcrumbLc = (items: string[]) => lifecycle<IContainerPropsIn, IContainerState>({
	componentWillMount() {
		this.props.updateBreadcrumb && this.props.updateBreadcrumb(items)
	},
})
export const breadcrumbRedux = connect(undefined, mapActionToProps)

export const addBreadcrumb = (items:  string[]) => (BaseComponent: React.ComponentType) => {
	return compose(breadcrumbRedux, addBreadcrumbLc(items))(BaseComponent)
}

export const addContainer = (options: IContainerProps = {}) => {
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
