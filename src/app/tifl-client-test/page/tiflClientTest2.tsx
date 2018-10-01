// import { Button } from '@blueprintjs/core'
// import { tiflResource } from '@nietzsche-client'
// import { createTabContainer } from 'layout/default/createTabContainer'
// import * as React from 'react'
// import { compose, pure } from 'recompose'
// // import { tiflResource } from './tifl'
// const Tab1 = () => (
// 	<>
// 		<Button onClick={async () => {
// 			try {
// 				const data = await tiflResource.patient.get({ max_results: 20, page: 7 })
// 				console.log('DATA', data, data.data)
// 			} catch (err) {
// 				console.log('ERR', err)
// 			}
// 		}}>
// 			Get patient
// 		</Button>
// 		<Button onClick={async () => {
// 			try {
// 				const data = await tiflResource.organization.get({ max_results: 20, page: 7 })
// 				console.log('DATA', data.data)
// 			} catch (err) {
// 				console.log('ERR', err, err.response)
// 			}
// 		}}>
// 			Get organization
// 		</Button>
// 		<Button onClick={async () => {
// 			try {
// 				const data = await tiflResource.encounter.get({ max_results: 20, page: 7 })
// 				console.log('DATA', data.data)
// 			} catch (err) {
// 				console.log('ERR', err)
// 			}
// 		}}>
// 			Get encounter
// 		</Button>
// 	</>
// )
// const Tab2 = () => (
// 	<>
// 		<h1>Hello I'm TiflClientTest 2</h1>
// 	</>
// )
// const TabContainer = createTabContainer({
// 	tabs: [
// 		{
// 			path: '/',
// 			component: Tab1,
// 			title: 'Tab 1',
// 			exact: true,
// 		},
// 		{
// 			path: '/tab2',
// 			component: Tab2,
// 			title: 'Tab 2',
// 		},
// 	],
// })
// export const TiflClientTestPage2 = compose(pure)(TabContainer)
