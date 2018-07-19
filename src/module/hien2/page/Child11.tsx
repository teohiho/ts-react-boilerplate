import * as React from 'react'
import { Child1PropsIn } from './Child1'
import { Child111 } from './Child111'
import { ThemeContext } from './Hien.page'

export class Child11 extends React.Component<Child1PropsIn> {
	render() {
		return (
			<div>

			<ThemeContext.Consumer>
				{theme => (
					<div style={{ backgroundColor: theme.background, color: theme.foreground }}>
						<h2>
							I'm child 1.1
						</h2>
						<Child111 />
					</div>
				)
			}
			</ThemeContext.Consumer>
			<h1>
				sadsad
			</h1>
			<h1>
				sadsad
			</h1>
			<h1>
				sadsad
			</h1>
			<h1>
				sadsad
			</h1>
			</div>
			// <div style={{ backgroundColor: theme.background, color: theme.foreground }}>
			// 	<h2>
			// 		I'm child 1.1
			// 	</h2>
			// </div>
		)
	}
}
// export class Child11 extends React.Component<Child1PropsIn> {
// 	render() {
// 		const { theme } = this.props
// 		return (
// 			<div style={{ backgroundColor: theme.background, color: theme.foreground }}>
// 				<h2>
// 					I'm child 1.1
// 				</h2>
// 			</div>
// 		)
// 	}
// }
