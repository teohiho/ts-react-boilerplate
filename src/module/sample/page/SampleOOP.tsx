import { Button } from '@blueprintjs/core'
import * as React from 'react'
import { InheritState } from './InheritState'

interface IMyButtonPropsIn {
	name: string
}

interface IMyButtonState {
	count: number
	color: string
}

class MyButton extends React.Component<IMyButtonPropsIn, IMyButtonState> {
	state = {
		count: 0,
		color: 'red',
	}
	toIncrease = () => {
		// C1:
		this.setState({
			count: this.state.count + 1,
		})
		// C2:
		// this.setState(({ count }) => ({
		// 		count: count + 1,
		// }))
	}
	changeColor = (newColor: string) => {
		this.setState({ color: newColor })
	}
	render() {
		const { name } = this.props
		const { count } = this.state
		return (
			<>
				{name}
				{count}
				<Button onClick={this.toIncrease}>
					Increasing
				</Button>
			</>
		)
	}
}

const SampleView = () => (
	<>
		<h1> Sample </h1>
		<MyButton name={'Hien'}/>
		<InheritState name={'Tri'}/>

	</>
)

export const SampleOOPPage = SampleView
