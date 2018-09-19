import { DOMAIN, SERVER_BASE } from '../setting'
export const server = {
	domain: DOMAIN,
	server: SERVER_BASE,
	obj: `${SERVER_BASE}obj/fhir-measure-program-batch?max_results=100000`,
	login: `${SERVER_BASE}oauth/login?next=/`,
	logout: `${SERVER_BASE}oauth/logout?next=/`,
}
