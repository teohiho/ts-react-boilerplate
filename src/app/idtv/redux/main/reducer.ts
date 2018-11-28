import { ActionIdtv } from './action'
import { ReduxResourceIdtv } from './saga'

type State = {

}

const make = (reduxModule: ReduxResourceIdtv) =>
	(state: State = {}, action: ActionIdtv): State => state

export default {
	make,
}
