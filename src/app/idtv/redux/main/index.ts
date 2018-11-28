import action from './action'
import actionType from './actionType'
import reducer from './reducer'
import reduxUtil from 'redux-packaged'
import saga from './saga'
import { combineReducers, Reducer } from 'redux'
import { path } from 'ramda'


// Now be packaged
const make = reduxUtil.make({
	makeActionType: actionType.make,
	makeAction: action.make,
	makeReducer: reducer.make,
	makeSaga: saga.make,
	// makeSelector: selector.make,
})

export default make

