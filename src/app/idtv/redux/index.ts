import leakageByRegion from './leakage-by-region'
import oonLeakageByRenderingProvider from './oon-leakage-by-rendering-provider'
import patientDrillDown from './patient-drill-down'
import pcpGroupName from './pcp-group-name'
import pcpName from './pcp-name'
import pcpPrimarySpecialty from './pcp-primary-specialty'
import pcpRegionName from './pcp-region-name'
import serviceType from './service-type'
import top10Acutecare from './top10-acutecare'
import top20PcpByRegionIn from './top20-pcp-by-region-in'
import top20PcpByRegionOOn from './top20-pcp-by-region-oon'
import top30SpecialistIn from './top30-specialist-in'
import top30SpecialistOon from './top30-specialist-oon'
import { combineResource } from 'nietzsche-client'
import { mapObjIndexed } from 'ramda'

const idtv = {
	pcpGroupName,
	pcpRegionName,
	pcpName,
	pcpPrimarySpecialty,
	serviceType,
	leakageByRegion,
	patientDrillDown,
	oonLeakageByRenderingProvider,
	top30SpecialistIn,
	top20PcpByRegionIn,
	top20PcpByRegionOOn,
	top30SpecialistOon,
	top10Acutecare,
}

const idtvResource = mapObjIndexed(lib => lib.resource , idtv)

const resource = combineResource(idtvResource)
const make = resource.getRedux

export { make }
export default make({ name: 'idtv', local: ['idtv'] })
