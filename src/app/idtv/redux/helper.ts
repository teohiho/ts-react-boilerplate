import { HttpMethod } from 'nietzsche-client'

type Config = {
	endpoint: string,
	idProp?: string,
	processResponseList?: (method: HttpMethod, data: any) => any,
}

const buildConfig = (serverConfig: Config)  => ({
	host: 'http://localhost:8088',
	idProp: 'index',
	...serverConfig,
})

export default {
	buildConfig,
}
