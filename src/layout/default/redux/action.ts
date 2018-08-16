import actionTypes from './actionType'

export const updateNavbar = (breadcrumbItems: string[]) => ({
	breadcrumbItems,
	type: actionTypes.UPDATE_NAV,
})
