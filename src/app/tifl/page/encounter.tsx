import { Alert, Button, InputGroup } from '@blueprintjs/core'
import { tifl } from '@nietzsche-client/index'
import { createTabContainer } from 'layout/default/createTabContainer'
import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { compose, pure, withState, withStateHandlers } from 'recompose'
import encounter from '../../../3rd/nietzsche-client/src/backend/tifl/encounter/index'


interface ITestPropsOut {}
interface ITestPropsIn extends ITestPropsOut {
	getEncounter: () => void
}
const Test = ({ getEncounter }: ITestPropsIn) => (
	<div>
		<Button>
			Login
		</Button>
		<Button onClick={() => encounter.getResource().query()}>
			Encounter
		</Button>
	</div>
)

// const mapEncounterActionsToProps = (dispatch: any) => ({
// 	getEncounter: () => dispatch(tifl.encounter.redux.action.query()),
// })

// const addRedux = connect(undefined, mapEncounterActionsToProps)

export const Encounter = compose<ITestPropsIn, ITestPropsOut>(pure)(Test)
// export const Encounter = compose<ITestPropsIn, ITestPropsOut>(pure, addRedux)(Test)
