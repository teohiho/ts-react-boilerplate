import redux from '../redux/'
import { compose, lifecycle } from 'recompose'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'


type StateAction = {
		updateBreadcrumb: (items: string[]) => void,
}

type Props = StateAction

// TODO: Try to run `breadcrumbItems` at begin lifecycle(constructor in case) in fp but still not work. That why move to class
// Check this commit: 181227922503bd0ae1452deca2282598b77fd4a3
const addBreadcrumbLc = (items: string[]) => lifecycle<Props, {}>({
	componentWillMount() {
		this.props.updateBreadcrumb && this.props.updateBreadcrumb(items)
	},
})
const mapActionToProps = (dispatch: Dispatch) => ({
	updateBreadcrumb: (items: string[]) => dispatch(redux.actionCollection.updateNavbar(items)),
})

export const breadcrumbRedux = connect(undefined, mapActionToProps)

export default (items:  string[]) => (BaseComponent: React.ComponentType) => {
	return compose(breadcrumbRedux, addBreadcrumbLc(items))(BaseComponent)
}
