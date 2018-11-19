import { from, ImmutableObject } from 'seamless-immutable'

type IFrameworkNavBar = {
	breadcrumbItems: string[],
}

export type TLayoutDefault = {
	frameworkNavbar: IFrameworkNavBar,
}

export const initialState: TLayoutDefault = {
	frameworkNavbar: {
		breadcrumbItems: ['Dashboard'],
	},
}

