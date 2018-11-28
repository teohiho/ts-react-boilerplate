import pcpHelper from '../helper'
import { registerResource } from 'nietzsche-client'

export default registerResource(pcpHelper.buildConfig({
	endpoint: 'pcp-name',
}))
