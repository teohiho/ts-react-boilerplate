import { Button } from '@material-ui/core'
import * as React from 'react'
import { Child1 } from './Child1'

export const themes = {
	light: {
		foreground: '#000000',
		background: '#eeeeee',
	},
	dark: {
		foreground: '#ffffff',
		background: '#222222',
	},
}

export const ThemeContext = React.createContext(
	themes.dark, // default value
)

export interface TTheme {
	foreground: string,
	background: string
}
export class HienPage extends React.Component {
	state = {
		theme: themes.light,
	}
	switchTheme = () => {
		this.setState({
			theme: themes.dark,
		})
	}
	render() {
		return (
			<div>

			<ThemeContext.Provider value={this.state.theme}>
				<Child1 />
				<Button onClick={this.switchTheme}>
					Switch Theme
				</Button>
			</ThemeContext.Provider>
			</div>
		)
	}
}
