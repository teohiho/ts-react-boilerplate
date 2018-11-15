import React from 'react'
import todoRedux from '../redux/'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { ITodoState } from '../redux/reducer'

type TRootState = {
	todo: ITodoState,
}

interface IProps {
	list: string[]
}

const TodoPage = ({ list }: IProps) => (
	<div>
		{list}
	</div>
)

const mapState = (state: TRootState) => ({
	list: todoRedux.selector.listSelector,
})

const addRedux = connect(mapState)

const Todo = compose<IProps, {}>(addRedux)(TodoPage)

export default Todo


