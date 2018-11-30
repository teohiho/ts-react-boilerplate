import classnames from 'classnames'
import React from 'react'
import { compose, pure } from 'recompose'
import { Switch } from 'react-router'


const styles = require('./index.scss')


// TYPE 1ST
type OwnProps = {
	children: Switch,
}
type StoreProps = {}
type Props =  OwnProps & StoreProps

// RUNTIME CODE
const DashBoard = ({ children }: Props) => (
		<div className={classnames(styles.body)}>
			{ children }
		</div>
)
export default compose<Props, {}>(pure)(DashBoard)
