import axios from 'axios'
import idtvRedux from '../../redux/index'
import React from 'react'
import { addContainer } from 'layout/default/'
import { Button } from '@blueprintjs/core'
import { compose } from 'recompose'
import { connect } from 'react-redux'

const { pcpName,
		pcpRegionName,
		pcpGroupName,
		main,
		leakageByRegion,
		serviceType,
		pcpPrimarySpecialty } = idtvRedux.part

type OwnProps = {}
type ActionProps = {
	pcpNameQuery: typeof pcpName.actionCollection.query,
	pcpRegionNameQuery: typeof pcpRegionName.actionCollection.query,
	pcpGroupNameQuery: typeof pcpGroupName.actionCollection.query,
	serviceTypeQuery: typeof serviceType.actionCollection.query,
	pcpPrimarySpecialtyQuery: typeof pcpPrimarySpecialty.actionCollection.query,
	leakageByRegionQuery: typeof leakageByRegion.actionCollection.addMany,
	startQuery: typeof main.actionCollection.startQuery,
}
type Props = ActionProps & OwnProps

const Test = ({
			leakageByRegionQuery,
			 startQuery,
			pcpNameQuery,
			pcpRegionNameQuery, pcpGroupNameQuery, serviceTypeQuery, pcpPrimarySpecialtyQuery }: Props) => (
	<div>
		<Button onClick={() => pcpNameQuery({})}>
			pcpNameQuery
		</Button>
		<Button onClick={() => pcpRegionNameQuery({})}>
			pcpRegionNameQuery
		</Button>
		<Button onClick={() => pcpGroupNameQuery({})}>
			pcpGroupNameQuery
		</Button>
		<Button onClick={() => serviceTypeQuery({})}>
			serviceTypeQuery
		</Button>
		<Button onClick={() => pcpPrimarySpecialtyQuery({})}>
			pcpPrimarySpecialtyQuery
		</Button>
		<Button onClick={() => leakageByRegionQuery({
			pcp_group_identifier: [],
			pcp_identifier: [],
			pcp_primary_specialty: [],
			pcp_region_name: [],
			service_type: [],
		})}>
			leak
		</Button>

		<Button onClick={
			() => startQuery()
		}>
			GET ALL
		</Button>
	</div>
)

export default compose<Props, OwnProps>(
	addContainer({
		breadcrumbItems: ['IDTV'],
	}),
	connect(undefined, {
		pcpNameQuery: pcpName.actionCollection.query,
		pcpRegionNameQuery: pcpRegionName.actionCollection.query,
		pcpGroupNameQuery: pcpGroupName.actionCollection.query,
		serviceTypeQuery: serviceType.actionCollection.query,
		pcpPrimarySpecialtyQuery: pcpPrimarySpecialty.actionCollection.query,
		leakageByRegionQuery: leakageByRegion.actionCollection.addMany,
		startQuery: main.actionCollection.startQuery,
	}),
)(Test)
