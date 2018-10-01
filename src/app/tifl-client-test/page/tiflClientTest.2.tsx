import { Alert, Button, InputGroup } from '@blueprintjs/core'
import { tifl } from '@nietzsche-client/index'
import { createTabContainer } from 'layout/default/createTabContainer'
import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { compose, pure, withState, withStateHandlers } from 'recompose'
interface ITestPropsOut {}
interface ITestPropsIn extends ITestPropsOut {
	getEncounter: () => void
}
const Test = ({ getEncounter }: ITestPropsIn) => (
	<div>
		<Button onClick={getEncounter}>
			Encounter
		</Button>
	</div>
)

const mapEncounterActionsToProps = (dispatch: any) => ({
	getEncounter: () => dispatch(tifl.action.encounter.getList()),
})

const addRedux = connect(undefined, mapEncounterActionsToProps)

export const TiflClientTestPage = compose<ITestPropsIn, ITestPropsOut>(pure, addRedux)(Test)
