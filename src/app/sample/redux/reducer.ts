import { ActionTodo } from './action'
import { ActionTypeTodo } from './actionType'
import { IReduxModuleAction } from 'redux-packaged'
import { keys, merge, omit } from 'ramda'
import { SelectorTodo } from './selector'


export type Status = 'inprocess' | 'done' | 'idle'
export interface ITodo {
	id: string,
	date: string,
	title: string,
	status: Status
}
export interface ITodoState {
	resource: {
		[id: string]: ITodo,
	},
	list: string[]
}

const initialState = {
	resource: {},
	list: [],
}

const make = (reduxModule: IReduxModuleAction<ActionTypeTodo, SelectorTodo, ActionTodo>) =>
	(state: ITodoState = initialState, action: ActionTodo): ITodoState => {
		const { actionType } = reduxModule
		switch (action.type) {
			case actionType.ADD: {
				const resourceUpdate = merge({ [action.payload.id]: action.payload })(state.resource)
				return {
					...state,
					resource: resourceUpdate,
					list: keys(resourceUpdate),
				}
			}
			case actionType.REMOVE: {
				const resourceUpdate = omit(action.payload.id)(state.resource) as {	[id: string]: ITodo; }
				return {
					...state,
					resource: resourceUpdate,
					list: keys(resourceUpdate),
				}
			}
			default: {
				return state
			}
		}
	}

export default {
	make,
}
