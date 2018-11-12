import { Alert, Button, InputGroup } from '@blueprintjs/core'
import { compose, pure, withState, withStateHandlers } from 'recompose'

import { Link } from 'react-router-dom'
import React from 'react'
import { connect } from 'react-redux'
import { createTabContainer } from 'layout/default/createTabContainer'
import { defaultRedux } from 'nietzsche-client/tifl'
// import encounter from '../../../3rd/nietzsche-client/src/backend/tifl/encounter/index'


interface ITestPropsOut {}
interface ITestPropsIn extends ITestPropsOut {
	getEncounter: () => void
	onLogin: () => void
}
const Test = ({ getEncounter, onLogin }: ITestPropsIn) => (
	<div>
		<Button onClick={onLogin}>
			Login
		</Button>
		<Button onClick={getEncounter}>
			Encounter
		</Button>
	</div>
)

const mapEncounterActionsToProps = (dispatch: any) => ({
	getEncounter: () => dispatch(defaultRedux.part.organization.actionCollection.query()),
	onLogin: () => dispatch(defaultRedux.part.auth.actionCollection.login('/')),
})

const addRedux = connect(undefined, mapEncounterActionsToProps)

export const Encounter = compose<ITestPropsIn, ITestPropsOut>(pure, addRedux)(Test)
// export const Encounter = compose<ITestPropsIn, ITestPropsOut>(pure, addRedux)(Test)
