import * as React from 'react'
import { Child11 } from './Child11'
import { TTheme } from './Hien.page'

export interface Child1PropsIn {
	theme?: TTheme
}
export class Child1 extends React.PureComponent<Child1PropsIn> {

	render() {
		console.log('>>>RENDERING: CHILD 1', this.props.theme)
		return (
			<div>
				<h1>
					I'm Child 1
				</h1>
				<h1>
					I'm Child 1
				</h1>
				<Child11/>
			</div>
		)
	}
}
