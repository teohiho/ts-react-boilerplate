import * as React from 'react'
import { connect } from 'react-redux'
import { compose, lifecycle, pure, renderComponent } from 'recompose'
import { Dispatch } from 'redux'
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
		this.props.breadcrumbItems && this.props.updateBreadcrumb(this.props.breadcrumbItems)
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
	componentDidMount() {
		this.props.breadcrumbItems && this.props.updateBreadcrumb(this.props.breadcrumbItems)
	},
})

export const addRedux = connect(undefined, mapActionToProps)

// export const Container = compose(pure, addRedux, addBreadcrumbLc)(ContainerView)
export const Container = compose(pure, addRedux, addBreadcrumbLc)(ContainerView)

export const createContainer = (options: ICreateContainerPropsOut) => (Component: React.ComponentType) => {
	return () => (
		<Container {...options} >
			{/* {renderComponent(Component)} */}
			<Component />
		</Container>
	)
}


interface ITab {
	path: string,

}

