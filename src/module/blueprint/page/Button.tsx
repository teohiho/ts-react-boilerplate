import * as React from 'react'
import { compose, pure } from 'recompose'

interface IButtonPropsOut {
	name: string
}


const Button = ({ name }: IButtonPropsOut) => (
	<div>
		<h1> {name} </h1>
	</div>
)

export const MyButton =  compose<IButtonPropsOut, IButtonPropsOut>(pure)(Button)
