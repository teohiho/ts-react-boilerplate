import React from 'react'
import { compose, onlyUpdateForKeys, pure } from 'recompose'
import { RouteComponentProps, Switch } from 'react-router'

import {
	FocusStyleManager,
} from '@blueprintjs/core'

const  styles = require('./scss/style.scss')

// TYPE 1ST
type OwnProps = {
	children: Switch,
}
type StoreProps = {}
type Props =  OwnProps & StoreProps

// RUNTIME CODE
const DashBoard = ({ children }: Props) => (
		<div>
			{ children }
		</div>
)
// const retrictRenderChild = onlyUpdateForKeys(['url'])
export const DashBoardBluePrint = compose<Props, OwnProps>(pure)(DashBoard)
