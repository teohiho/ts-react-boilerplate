import * as config from '../../conf/setting'

export const server = {
	domain: config.DOMAIN,
	server: config.SERVER_BASE,
	obj: `${config.SERVER_BASE}obj/fhir-measure-program-batch?max_results=100000`,
	login: `${config.SERVER_BASE}oauth/login?next=/`,
	logout: `${config.SERVER_BASE}oauth/logout?next=/`,
}
