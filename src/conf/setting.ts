import * as config from '../../conf/setting'

const appName = 'idtv'

export const server = {
	domain: config.DOMAIN,
	server: config.SERVER_BASE,
}

const app = {
	appName,
}

export default {
	server,
	...app,
	logRocketId: `abx/${appName}`,
}
