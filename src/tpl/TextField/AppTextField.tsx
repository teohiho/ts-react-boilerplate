import { Button, StandardProps, TextField, WithStyles, withStyles } from '@material-ui/core'
import { FormControlProps } from '@material-ui/core/FormControl'
import { TextFieldClassKey, TextFieldProps } from '@material-ui/core/TextField'
import * as React from 'react'
import ApptextfieldStyle from './AppTextField.style'

interface TextFieldOnly {
  autoComplete?: string
  autoFocus?: boolean
  children?: React.ReactNode
  defaultValue?: string | number
  disabled?: boolean
  error?: boolean
  // FormHelperTextProps?: Partial<FormHelperTextProps>
  fullWidth?: boolean
  helperText?: React.ReactNode
  id?: string
  // InputLabelProps?: Partial<InputLabelProps>
  // InputProps?: Partial<InputProps>
  // inputProps?: InputProps['inputProps']
  inputRef?: React.Ref<any> | React.RefObject<any>
  label?: React.ReactNode
  // margin?: PropTypes.Margin
  multiline?: boolean
  name?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  placeholder?: string
  required?: boolean
  rows?: string | number
  rowsMax?: string | number
  select?: boolean
  // SelectProps?: Partial<SelectProps>
  type?: string
  value?: string
}
export interface IAppTextFieldConnectedExtendedProps extends TextFieldOnly {
  onSubmit?: (text: string | undefined) => void
}

export namespace AppTextField {
  export interface Props extends WithStyles<typeof ApptextfieldStyle>, IAppTextFieldConnectedExtendedProps {

  }
  export interface State {
	text: string | undefined
  }
}
class AppTextField extends React.Component<AppTextField.Props, AppTextField.State> {
  state = {
	text: this.props.value || '',
  }
  // static getDerivedStateFromProps(props: IAppTextFieldConnectedExtendedProps, state: AppTextField.State) {
  //   console.log('>>>>PROPS', props, state)
  //   if (props.value) {
  //     return {
  //       text: props.value,
  //     }
  //   }
  //   return null
  // }
  private onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
	const { value } = event.target
	this.setState({
		text: value,
	})
  }
  private onKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
	const { onSubmit } = this.props
	const { text } = this.state
	if (event.key === 'Enter') {
		this.props.onSubmit && this.props.onSubmit(text)
		this.setState({
		text: '',
		})
		event.preventDefault()
	}
  }
  public render(): JSX.Element {
	const { classes, onSubmit, ...restInput } = this.props
	const { text } = this.state
	return (
		<TextField
			{...restInput}
			inputProps={{
			className: classes.input,
			}}
			InputLabelProps={{
			style: {
				color: 'black',
			},
			}}
			value={text}
			className={classes.container}
			onChange={this.onChange}
			onKeyPress={this.onKeyPress}
		/>
	)
  }
}

export default withStyles(ApptextfieldStyle)(AppTextField)
