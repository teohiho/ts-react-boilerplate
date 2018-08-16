import { from, ImmutableObject } from 'seamless-immutable'


export const initialState: TLayoutDefault = from({
	frameworkNavbar: {
		breadcrumbItems: ['Dashboard'],
	},
})

interface IFrameworkNavBar {
	breadcrumbItems: string[]
}
export type TLayoutDefault = ImmutableObject<ILayoutDefault>

export interface ILayoutDefault  {
	frameworkNavbar: IFrameworkNavBar
}
