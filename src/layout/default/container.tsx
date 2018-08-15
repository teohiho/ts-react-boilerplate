import * as React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { Dispatch } from 'redux'
import { updateNavbar } from './redux/action'

interface IContaienrReduxActions {

}
interface IContainerReduxProps {

}

interface IContainerPropsOut {

}
interface IContainerPropsIn extends IContainerPropsOut, IContainerReduxProps, IContainerReduxProps {
	children: any,
}
const ContainerView = ({ children }) => (
	<>
	</>
)
const mapActionToProps = (dispatch: Dispatch) => ({
	updateBreadCrumb: (items: string[]) => dispatch(updateNavbar(items)),
})
export const addRedux = connect(undefined, mapActionToProps)

export const createContainer = compose()(ContainerView)
