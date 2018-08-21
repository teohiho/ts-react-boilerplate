import { compose, pure, withStateHandlers } from 'recompose'

export interface IIsOpenState {
	isOpen: boolean,
}
export interface IIsOpenStateHandle {
	handleBooleanChange: () => boolean,
}

export const isOpenState = withStateHandlers(
	{
		isOpen: false,
	},
	{
		handleBooleanChange: ({ isOpen }) => () => {
			return 	{
				isOpen: !isOpen,
			 }
			// console.log('isOpen:', isOpen)
		},
	},
)
