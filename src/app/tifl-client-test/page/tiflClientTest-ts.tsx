// import { Alert, Button, InputGroup } from '@blueprintjs/core'
// import { tiflAuth, tiflResource } from '@nietzsche-client/backend/tifl/tiflClient.web'
// import { createTabContainer } from 'layout/default/createTabContainer'
// import * as React from 'react'
// import { Link } from 'react-router-dom'
// import { compose, pure, withState, withStateHandlers } from 'recompose'
// const renderBody  = (
// 	key: string,
// 	item: any,
// 	updateItem: any,
// 	targetItem: any,
// 	updateTargetItem: any,
// 	updateItemServer: any, getItemServer: any,
// 	searchItem: any,
// 	pathName: any) => (
// 	<>
// 		<Button onClick={async () => {
// 			try {

// 				const data = await getItemServer()
// 				console.log('DATA', data, data)
// 				console.log('1st PATIENT', data[0])
// 				if (data[0]) {
// 					updateItem(data[0])
// 					updateTargetItem(pathName(data))
// 				}
// 			} catch (err) {
// 				console.log('ERR', err)
// 			}
// 		}}>
// 			{`Get ${key}`}
// 		</Button>
// 		<div><pre>{JSON.stringify(item, null, 2) }</pre></div>
// 		<h3>Change Name</h3>
// 		{targetItem}
// 		<InputGroup value={targetItem} onChange={(evt: any) => updateTargetItem(evt.target.value)}></InputGroup>
// 		<Button onClick={async () => {
// 			try {
// 				const data = await updateItemServer(item, targetItem)
// 				console.log('DATA', data)
// 			} catch (err) {
// 				console.log('ERR', err)
// 			}
// 		}}>
// 			{`Update ${key}`}
// 		</Button>
// 		<Button onClick={async () => {
// 			try {
// 				const data = await searchItem(targetItem)
// 				console.log('DATA', data)
// 			} catch (err) {
// 				console.log('ERR', err)
// 			}
// 		}}>
// 			{`Seach ${key}`}
// 		</Button>
// 		<Link to="/tifl-test2">
// 			Test 2
// 		</Link>
// 	</>
// )

// const namespaceHandler = (namespace: string) => withStateHandlers(
// 	{
// 		[namespace]: undefined,
// 	},
// 	{
// 		[`update${namespace}`]: () => (data: any) => ({ [namespace]: data }),
// 	},
// )
// const OrganizationTest = ({ organization, updateorganization, organizationInput, updateorganizationInput }: any) =>
// 	renderBody(
// 		'organization',
// 		organization,
// 		updateorganization,
// 		organizationInput,
// 		updateorganizationInput,
// 		async (item: any, targetItem:any) => await tiflResource.organization.update({ ...item, name: targetItem }),
// 		async () => await tiflResource.organization.get({ max_results: 20, page: 7 }),
// 		async (text: string) => await tiflResource.organization.search(text),
// 		(data: any) =>  data[0].name,
// 	)
// const PatientTest = ({ patient, updatepatient, patientInput, updatepatientInput }: any) =>
// 	renderBody(
// 		'patient',
// 		patient,
// 		updatepatient,
// 		patientInput,
// 		updatepatientInput,
// 		async (item: any, targetItem:any) => await tiflResource.patient.update({ ...item, name: { ...item.name, given: targetItem } }),
// 		async () => await tiflResource.patient.get({ max_results: 20, page: 7 }),
// 		async (text: string) => await tiflResource.patient.search(text),
// 		(data: any) =>  data[0].name.given,
// 	)
// const EncounterTest = ({ encounter, updateencounter, encounterInput, updateencounterInput }: any) =>
// 	renderBody(
// 		'encounter',
// 		encounter,
// 		updateencounter,
// 		encounterInput,
// 		updateencounterInput,
// 		async (item: any, targetItem:any) => await tiflResource.encounter.update({ ...item, status: targetItem }),
// 		async () => await tiflResource.encounter.get(),
// 		async (text: string) => await tiflResource.encounter.search(text),
// 		(data: any) =>  data[0].status,
// 	)
// const MemberTest = ({ member, updatemember, memberInput, updatememberInput }: any) =>
// 	renderBody(
// 		'member',
// 		member,
// 		updatemember,
// 		memberInput,
// 		updatememberInput,
// 		async (item: any, targetItem:any) => await tiflResource.member.update({ ...item, first_name: targetItem }),
// 		async () => await tiflResource.member.get(),
// 		async (text: string) => await tiflResource.member.search(text),
// 		(data: any) =>  data[0].first_name,
// 		)
// const onLogout = async () => {
// 	try {
// 		const data = await tiflAuth.logout()
// 		console.log('DATA', data)
// 	} catch (err) {
// 		alert(err)
// 	}
// }
// const Auth = () => (
// 	<div>
// 		<Button onClick={tiflAuth.login}>
// 			Login
// 		</Button>
// 		<Button onClick={onLogout}>
// 			Logout
// 		</Button>
// 	</div>
// )
// const TabContainer = createTabContainer({
// 	tabs: [
// 		{
// 			path: '/',
// 			component: compose<ITestClientPropsIn, ITestClientPropsOut>(
// 				pure, namespaceHandler('patient'),
// 				namespaceHandler('patientInput'),

// 				)(PatientTest),
// 			title: 'Patient',
// 			exact: true,
// 		},
// 		{
// 			path: '/org',
// 			component: compose<ITestClientPropsIn, ITestClientPropsOut>(
// 				pure, namespaceHandler('organization'),
// 				namespaceHandler('organizationInput'),

// 				)(OrganizationTest),
// 			title: 'Organization',
// 		},
// 		{
// 			path: '/enc',
// 			component: compose<ITestClientPropsIn, ITestClientPropsOut>(
// 				pure, namespaceHandler('encounter'),
// 				namespaceHandler('encounterInput'),

// 				)(EncounterTest),
// 			title: 'Encounter',
// 		},
// 		{
// 			path: '/mem',
// 			component: compose<ITestClientPropsIn, ITestClientPropsOut>(
// 				pure, namespaceHandler('member'),
// 				namespaceHandler('memberInput'),

// 				)(MemberTest),
// 			title: 'Member',
// 		},
// 		{
// 			path: '/auth',
// 			component: compose(
// 				)(Auth),
// 			title: 'Auth',
// 		},
// 	],
// })

// interface ITestClientPropsOut {}
// interface ITestClientStateHandler {
// 	patient: any,
// 	updatepatient: any,
// 	patientInput: any,
// 	updatepatientInput: any,

// 	organization: any,
// 	updateorganization: any,
// 	organizationInput: any,
// 	updateorganizationInput: any,

// }
// interface ITestClientPropsIn extends ITestClientPropsOut, ITestClientStateHandler {}
// export const TiflClientTestPage = compose(pure)(TabContainer)
