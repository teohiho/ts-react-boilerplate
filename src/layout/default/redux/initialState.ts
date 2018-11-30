
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

