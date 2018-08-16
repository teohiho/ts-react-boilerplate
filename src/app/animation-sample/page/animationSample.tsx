import { Button } from '@blueprintjs/core'
import * as React from 'react'
import { compose, pure, withStateHandlers } from 'recompose'

const styles = require('../scss/style.scss')

interface ITabPropsOut {
}
interface ITabState {
	left: string
}
interface ITabStateHandler {
	updateLeft: (event: React.MouseEvent<HTMLButtonElement>) => void
}
interface ITabPropsIn extends ITabPropsOut, ITabState, ITabStateHandler {}
// const Slider = ({ left }: ISliderPropsIn) => (
// 	<div className="slider" style={{ left }}></div>
// )

const AnimationSampleView = ({ left, updateLeft }: ITabPropsIn) => (
	<>
		{/* <Button onClick={updateLeft}> Tab 1</Button>
		<Button onClick={updateLeft}> Tab 2</Button>
		<Button onClick={updateLeft}> Tab 3</Button>
		<Button onClick={updateLeft}> Tab 4</Button> */}
		{/* <Button> Tab 2</Button>
		<Button> Tab 3</Button>
		<Button> Tab 4</Button> */}
		{/* <div className="slider" style={{ left }}></div> */}
	</>
)

const addLeftHandler = withStateHandlers(
	{
		left: '0px',
	},
	{
		updateLeft: () => (event: React.MouseEvent<HTMLButtonElement>) => {
			console.log('>>>>', event.target, event.screenX, event.screenY)
			return {
				// left:  event.target.offsetLeft + 'px',
				left: event.nativeEvent.offsetY + 'px',
			}
			// ({ left:  event.screenY + 'px' })
		} ,
	},
)

export const AnimationSamplePage = compose<ITabPropsIn, ITabPropsOut>(pure, addLeftHandler)(AnimationSampleView)
