import * as classnames from 'classnames'
import { TRootState } from 'conf/redux/reducer'
import * as React from 'react'
import { connect } from 'react-redux'
import { compose, lifecycle, pure, renderComponent } from 'recompose'
import { Dispatch } from 'redux'
import { withPropsChecker } from 'util/react'
import { updateNavbar } from './redux/action'

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

const mapActionToProps = (dispatch: Dispatch) => ({
	updateBreadcrumb: (items: string[]) => dispatch(updateNavbar(items)),
})

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

export const addContainer = (BaseComponent: React.ComponentType, className?: string) => () => (
	<div className={classnames('p-h-md', 'u-flex--1',  't-background', className)}>
		<BaseComponent />
	</div>
)
