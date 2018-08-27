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
interface IContainerReduxProps {

}

interface IContainerPropsOut extends ICreateContainerPropsOut{

}
interface IContainerPropsIn extends IContainerPropsOut, IContainerReduxProps, IContaienrReduxActions {
	children: any,
}
interface IContainerState {}

interface ICreateContainerPropsOut {
	breadcrumbItems: string[],
}

class ContainerView extends React.PureComponent<IContainerPropsIn, IContainerState> {
	constructor(props: IContainerPropsIn) {
		super(props)
		this.props.breadcrumbItems && this.props.updateBreadcrumb && this.props.updateBreadcrumb(this.props.breadcrumbItems)
	}
	render() {
		return (
			<>
				{this.props.children}
			</>
		)
	}
}
const mapActionToProps = (dispatch: Dispatch) => ({
	updateBreadcrumb: (items: string[]) => dispatch(updateNavbar(items)),
})

const addBreadcrumbLc = lifecycle<IContainerPropsIn, IContainerState>({
	componentWillMount() {
		this.props.breadcrumbItems && this.props.updateBreadcrumb && this.props.updateBreadcrumb(this.props.breadcrumbItems)
	},
})

export const breadcrumbRedux = connect(undefined, mapActionToProps)

export const Container = compose(pure, breadcrumbRedux)(ContainerView)

// TODO: Try to run `breadcrumbItems` at begin lifecycle(constructor in case) in fp but still not work. That why move to class
export const createContainer = (options: ICreateContainerPropsOut) => (BaseComponent: React.ComponentType) => {
	return (props: any) => (
		<Container {...options} >
			<BaseComponent {...props}/>
		</Container>
	)
}
const addBreadcrumbLc1 = (items: string[]) => lifecycle<IContainerPropsIn, IContainerState>({
	componentWillMount() {
		this.props.updateBreadcrumb && this.props.updateBreadcrumb(items)
	},
})
export const addBreadcrumb = (items:  string[]) => (BaseComponent: React.ComponentType) => {
	return compose(breadcrumbRedux, addBreadcrumbLc1(items))(BaseComponent)
}

interface ITab {
	path: string,

}

export const addContainer = (Component: React.ComponentType, className?: string) => () => (
	<div className={classnames('p-h-md', 'u-flex--1',  't-background', className)}>
		<Component />
	</div>
)
