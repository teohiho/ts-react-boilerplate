import { Alert, Button, InputGroup } from '@blueprintjs/core'
import { tifl } from '@nietzsche-client/index'
import { createTabContainer } from 'layout/default/createTabContainer'
import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { compose, pure, withState, withStateHandlers } from 'recompose'
import organization from '../../../3rd/nietzsche-client/src/backend/tifl/organization/index'

const renderBody  = (
	key: string,
	item: any,
	updateItem: any,
	targetItem: any,
	updateTargetItem: any,
	updateItemServer: any,
	getItemServer: any,
	searchItem: any,
	pathName: any) => (
	<>
		<Button onClick={async () => {
			try {

				const data = await getItemServer()
				console.log('DATA', data, data)
				console.log('1st PATIENT', data[0])
				if (data[0]) {
					updateItem(data[0])
					updateTargetItem(pathName(data))
				}
			} catch (err) {
				console.log('ERR', err)
			}
		}}>
			{`Get ${key}`}
		</Button>
		<div><pre>{JSON.stringify(item, null, 2) }</pre></div>
		<h3>Change Name</h3>
		{targetItem}
		<InputGroup value={targetItem} onChange={(evt: any) => updateTargetItem(evt.target.value)}></InputGroup>
		<Button onClick={async () => {
			try {
				const data = await updateItemServer(item, targetItem)
				console.log('DATA', data)
			} catch (err) {
				console.log('ERR', err)
			}
		}}>
			{`Update ${key}`}
		</Button>
		<Button onClick={async () => {
			try {
				const data = await searchItem(targetItem)
				console.log('DATA', data)
			} catch (err) {
				console.log('ERR', err)
			}
		}}>
			{`Seach ${key}`}
		</Button>
		<Link to="/tifl-test2">
			Test 2
		</Link>
	</>
)

const namespaceHandler = (namespace: string) => withStateHandlers(
	{
		[namespace]: undefined,
	},
	{
		[`update${namespace}`]: () => (data: any) => ({ [namespace]: data }),
	},
)
const OrganizationTest = ({ organization, update, search, item,
	 updateorganization, organizationInput, updateorganizationInput, getList }: any) =>
	renderBody(
		'organization',
		item,
		updateorganization,
		organizationInput,
		updateorganizationInput,
		(item: any, modifiedValue: string)  => update(item._id, { ...item, name: modifiedValue }),
		// async (item: any, targetItem:any) => await tiflResource.organization.update({ ...item, name: targetItem }),
		// undefined,
		getList,
		(text: string) => search(text),
		// undefined,
		(data: any) =>  data[0].name,
	)
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
interface IAuthPropsOut {}
interface IAuthPropsIn {
	logout: () => void
	login: () => void
}
const Auth = ({ login, logout }: IAuthPropsIn) => (
	<div>
		<Button onClick={login}>
			Login
		</Button>
		<Button onClick={logout}>
			Logout
		</Button>
	</div>
)
const mapAuthActionToProps = (dispatch: any) => ({
	login: () => dispatch(tifl.auth.action.login('/t-test')),
	logout: () => dispatch(tifl.auth.action.logout('/')),
})
const mapOrgActionToProps = (dispatch: any) => ({
	getList: () => dispatch(tifl.organization.action.query()),
	update: (id: string, data: any) => dispatch(tifl.organization.action.save(id , data)),
	search: (keyText: string) => dispatch(tifl.organization.action.textSearch(keyText)),
})
const mapOrgStateToProps = (state: any) => ({
	// item: state.resource.organization.data[state.resource.organization.list[0]],
	item: tifl.organization.selector.itemSelector(state, { id: '5915975d50a23f00151a79b5' }),
	// item: undefined,
})
const addAuthRedux = connect(undefined, mapAuthActionToProps)
const addOrgRedux = connect(mapOrgStateToProps, mapOrgActionToProps)
const TabContainer = createTabContainer({
	tabs: [
		// {
		// 	path: '/',
		// 	component: compose<ITestClientPropsIn, ITestClientPropsOut>(
		// 		pure, namespaceHandler('patient'),
		// 		namespaceHandler('patientInput'),

		// 		)(PatientTest),
		// 	title: 'Patient',
		// 	exact: true,
		// },
		{
			path: '/org',
			component: compose<ITestClientPropsIn, ITestClientPropsOut>(
				pure, namespaceHandler('organization'),
				namespaceHandler('organizationInput'),
				addOrgRedux,
				)(OrganizationTest),
			title: 'Organization',
		},
		// {
		// 	path: '/enc',
		// 	component: compose<ITestClientPropsIn, ITestClientPropsOut>(
		// 		pure, namespaceHandler('encounter'),
		// 		namespaceHandler('encounterInput'),

		// 		)(EncounterTest),
		// 	title: 'Encounter',
		// },
		// {
		// 	path: '/mem',
		// 	component: compose<ITestClientPropsIn, ITestClientPropsOut>(
		// 		pure, namespaceHandler('member'),
		// 		namespaceHandler('memberInput'),

		// 		)(MemberTest),
		// 	title: 'Member',
		// },
		{
			path: '/auth',
			component: compose<IAuthPropsIn, IAuthPropsOut>(addAuthRedux)(Auth),
			title: 'Auth',
		},
	],
})

interface ITestClientPropsOut {}
interface ITestClientStateHandler {
	patient: any,
	updatepatient: any,
	patientInput: any,
	updatepatientInput: any,

	organization: any,
	updateorganization: any,
	organizationInput: any,
	updateorganizationInput: any,

}
interface ITestClientPropsIn extends ITestClientPropsOut, ITestClientStateHandler {}
export const TiflClientTestPage = compose(pure)(TabContainer)
