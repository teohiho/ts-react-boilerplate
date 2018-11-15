import { action, ActionType } from 'typesafe-actions'
import { ActionTypeTodo } from './actionType'
import { IReduxModule } from 'redux-packaged'
import { SelectorTodo } from './selector'


export type ActionCollectionTodo = ReturnType<typeof make>
export type ActionTodo = ActionType<ActionCollectionTodo>

const make = (reduxModule: IReduxModule<ActionTypeTodo, SelectorTodo>) => {
	const { actionType } = reduxModule
	const add = (title: string, status = 'idle') =>
		action(actionType.ADD, { title, status, date: new Date(), id: Number(new Date()).toString() })
	const remove = (id: string) => action(actionType.REMOVE, { id })
	return {
		add,
		remove,
	}
}

export default {
	make,
}
