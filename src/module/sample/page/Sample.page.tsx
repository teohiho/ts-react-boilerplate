import { Button } from '@blueprintjs/core'
import * as React from 'react'
import { compose, withStateHandlers } from 'recompose'

interface IMyButtonPropsOut {
	name: string
}
export interface IMyButtonState {
	count: number
}
export interface IMyButtonStateHandle {
	toIncrease: () => void
}
interface IMyButtonPropsIn extends IMyButtonPropsOut, IMyButtonState, IMyButtonStateHandle{

}

const MyButtonView = ({ name, count, toIncrease }: IMyButtonPropsIn) => (
	<>
		{name}
		{count}
		<Button onClick={toIncrease}>
			Increasing
		</Button>
	</>
)

export const countState = withStateHandlers(
	{
		count: 0,
	},
	{
		toIncrease: ({ count }) => () => ({ count: count + 1 }),
	},
)
export interface  IColorState {
	color: string
}

export interface IColorStateHandller {
	changeColor: (newColor: string) => void
}

export const colorState = withStateHandlers(
	{
		color: 'red',
	},
	{
		changeColor: () => (newColor: string) => ({ color: newColor }),
	},
)


const MyButton = compose<IMyButtonPropsIn, IMyButtonPropsOut>(countState)(MyButtonView)



const SampleView = () => (
	<>
		<h1> Sample </h1>
		<MyButton name={'Hien'}/>
	</>
)

export const SamplePage = SampleView
