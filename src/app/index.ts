import about from './about'
import auth from './auth'
import dashboard from './dashboard'
import moduleUtil from './helper'
import reduxUtil from 'redux-packaged'
import setting from './setting'

const app = {
	about,
	auth,
	dashboard,
	setting,
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
