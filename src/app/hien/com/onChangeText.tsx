import { compose, pure, withStateHandlers } from 'recompose'

export interface ITextState {
	text: string,
}
export interface ITextStateHandle {
	onChangeText: (textInput: string) => void,
}

export const textState = withStateHandlers(
	(props: ITextState) => ({
		text: props.text || '',
	}),
	{
		onChangeText: () => (textInput: string) => {
			return 	{
				text: textInput,
			 }
		},
	},
)
