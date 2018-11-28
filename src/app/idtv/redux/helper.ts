import { HttpMethod } from 'nietzsche-client'

type Config = {
	endpoint: string,
	idProp?: string,
	processResponseList?: (method: HttpMethod, data: any) => any,
}

const buildConfig = (serverConfig: Config)  => ({
	host: 'http://localhost:8088',
	idProp: 'index',
	// processResponseList: (method: HttpMethod, data: any) => {
	// 	return data
	// },
	...serverConfig,
})

export default {
	buildConfig,
}
