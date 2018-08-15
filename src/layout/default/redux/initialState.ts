import { from, ImmutableObject } from 'seamless-immutable'


export const initialState: TLayoutDefault = from({
	frameworkNavbar: {
		breadCrumbItems: ['Dashboard'],
	},
})

interface IFrameworkNavBar {
	breadCrumbItems: string[]
}
export type TLayoutDefault = ImmutableObject<ILayoutDefault>

export interface ILayoutDefault  {
	frameworkNavbar: IFrameworkNavBar
}
