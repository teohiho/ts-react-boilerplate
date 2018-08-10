import { Button } from '@blueprintjs/core'
import * as React from 'react'
import { compose } from 'recompose'
import { colorState, countState, IColorState, IColorStateHandller, IMyButtonState, IMyButtonStateHandle } from './Sample.page'
interface IInheritStatePropsOut {
	name: string
}

interface IInheritStatePropsIn extends
	IMyButtonState,
	IMyButtonStateHandle,
	IInheritStatePropsOut,
	IColorState,
	IColorStateHandller
	{

}

const InheritStateView = ({ count, toIncrease, name, color, changeColor }: IInheritStatePropsIn) => (
	<div>
		{name} think {name} can inherit state
		Let's see ....
		{count}
		{color}
		<Button onClick={toIncrease}>
			Increasing
		</Button>
		<Button onClick={() => changeColor('yellow')}>
			ChangeColor
		</Button>
	</div>
)


export const InheritState = compose<IInheritStatePropsIn, IInheritStatePropsOut>(
	countState, colorState)(InheritStateView)
