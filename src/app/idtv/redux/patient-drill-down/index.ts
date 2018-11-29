import pcpHelper from '../helper'
import { HttpMethod, registerResource } from 'nietzsche-client'
import { mapObjIndexed } from 'ramda'
import { v1 } from 'uuid'


export default registerResource(pcpHelper.buildConfig({
	endpoint: 'patient-drill-down',
	idProp: 'id',
	processResponseList: (method: HttpMethod, data: any[]) => {
		// if (method === 'post') {
		// 	return data.map(item => ({ id: v1(), ...data }))
		// }
		return data
	},
}))