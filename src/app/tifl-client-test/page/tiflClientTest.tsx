import { Button } from '@blueprintjs/core'
// import FiiClient, { getClient, PubSub } from '@fii-client'
import { createTabContainer } from 'layout/default/createTabContainer'
import * as React from 'react'
import { compose, pure } from 'recompose'

const Tab1 = () => (
	<>
		<Button onClick={async () => {
			//  const client = getClient()
			//  console.log('Begin get patient')
			//  const data = await client.FhirPatientNeo.rawQuery({
			//    max_results: 20,
			//  })
			//  console.log('DATA PATIENT', data)
		}}>
			Get patient
		</Button>
	</>
)
const Tab2 = () => (
	<>
		<h1>Hello I'm TiflClientTest 2</h1>
	</>
)
const TabContainer = createTabContainer({
	tabs: [
		{
			path: '/',
			component: Tab1,
			title: 'Tab 1',
			exact: true,
		},
		{
			path: '/tab2',
			component: Tab2,
			title: 'Tab 2',
		},
	],
})
export const TiflClientTestPage = compose(pure)(TabContainer)
