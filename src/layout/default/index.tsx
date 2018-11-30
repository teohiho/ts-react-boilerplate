import React from 'react'
import { compose, onlyUpdateForKeys, pure } from 'recompose'
import { Footer, Header } from './com/'
import { Switch } from 'react-router'


const  styles = require('./index.scss')

// TYPE 1ST
interface IDashboardPropsOut {
	url: string
}
interface IDashboardPropsIn extends IDashboardPropsOut{
	children: Switch
}

// RUNTIME CODE


const Dashboard = ({ children, url }: IDashboardPropsIn) => {
	return (
		<div className={styles.dashboardApp}>
			<Header
			 	url={url}
			 />
			{children}
			<Footer />
		</div>
	)
}

export * from './util'
export default compose<IDashboardPropsIn, IDashboardPropsOut>(pure)(Dashboard)
