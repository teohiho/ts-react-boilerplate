import pcpHelper from '../helper'
import { HttpMethod, registerResource } from 'nietzsche-client'


export default registerResource(pcpHelper.buildConfig({
	endpoint: 'top30-specialist-oon',
	idProp: 'id',
	processResponseList: (method: HttpMethod, data: any[]) => {
		// if (method === 'post') {
		// 	return data.map(item => ({ id: v1(), ...data }))
		// }
		return data
	},
}))
