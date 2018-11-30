import dashboard from './dashboard'
import idtv from './idtv'
import moduleUtil from './helper'
import reduxUtil from 'redux-packaged'
import setting from './setting'

const app = {
	setting,
	dashboard,
	idtv,
}


const route = moduleUtil.getRoute(app)
const redux = moduleUtil.getRedux(app)
const com = moduleUtil.getCom(app)
const reducer = reduxUtil.reducer.get(redux)
const reducerRaw = reduxUtil.reducer.getRaw(redux)
const saga = reduxUtil.saga.get(redux)

export default {
	redux,
	com,
	reducer,
	saga,
	route,
	reducerRaw,
}
