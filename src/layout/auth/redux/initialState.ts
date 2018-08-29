import { from, ImmutableObject } from 'seamless-immutable'
export type TPaletteType = 'light' | 'dark'

interface IAppState {
	isFetching: boolean,
	isAuthenticated: boolean
}

export type TAppState = ImmutableObject<IAppState>

export const authenticationState: TAppState = from({
 	isFetching: false,
	isAuthenticated: false,
})
