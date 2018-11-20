import React from 'react'
import todoRedux from '../redux/'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { ITodoState } from '../redux/reducer'

type TRootState = {
	todo: ITodoState,
}
type OwnProps = {
}
type StoreProps = {
	list: string[],
}
type InjectedProps = {}
type ActionProps = {
}
type Props =  OwnProps & StoreProps & ActionProps & InjectedProps


const TodoPage = ({ list }: Props) => (
	<div>
		<h1>
			Todo
		</h1>
		{list}
	</div>
)

const mapState = (state: TRootState) => ({
	list: todoRedux.selector.listSelector,
})

const addRedux = connect(mapState)

const Todo = compose<Props, {}>(addRedux)(TodoPage)

export default Todo


