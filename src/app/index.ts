import moduleUtil from './helper'
import reduxUtil from 'redux-packaged'
import sample from './sample'
import setting from './setting'
// import authentication from './authentication'
// import dashboard from './dashboard'
// import hien from './hien'
// import man from './man'
// import mqtt from './mqtt'
// import test from './test'
// import tifl from './tifl/'

const app = {
	// test,
	// tifl,
	// authentication,
	setting,
	// dashboard,
	sample,
	// hien,
	// man,
	// mqtt,
}

const route = moduleUtil.getRoute(app)
const redux = moduleUtil.getRedux(app)
const com = moduleUtil.getCom(app)
const reducer = reduxUtil.reducer.get(redux)
const reducerRaw = reduxUtil.reducer.getRaw(redux)
const saga = reduxUtil.saga.get(redux)

console.log('routerouteroute', route)
export default {
	redux,
	com,
	reducer,
	saga,
	route,
	reducerRaw,
}
