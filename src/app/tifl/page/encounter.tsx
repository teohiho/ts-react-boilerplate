import { Alert, Button, InputGroup } from '@blueprintjs/core'
import { createTabContainer } from 'layout/default/createTabContainer'
import { defaulResource, organization } from 'nietzsche-client/tifl'
import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { compose, pure, withState, withStateHandlers } from 'recompose'
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
	getEncounter: () => dispatch(defaulResource.module.organization.action.query()),
	onLogin: () => dispatch(defaulResource.module.auth.action.login()),
})

const addRedux = connect(undefined, mapEncounterActionsToProps)

export const Encounter = compose<ITestPropsIn, ITestPropsOut>(pure, addRedux)(Test)
// export const Encounter = compose<ITestPropsIn, ITestPropsOut>(pure, addRedux)(Test)
