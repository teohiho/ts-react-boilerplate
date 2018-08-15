import actionTypes from './actionType'

export const updateNavbar = (breadCrumbItems: string[]) => ({
	breadCrumbItems,
	type: actionTypes.UPDATE_NAV,
})
