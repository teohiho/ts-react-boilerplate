import pcpHelper from '../helper'
import { HttpMethod, registerResource } from 'nietzsche-client'


export default registerResource(pcpHelper.buildConfig({
	endpoint: 'top20-pcp-by-region-oon',
	idProp: 'id',
}))
