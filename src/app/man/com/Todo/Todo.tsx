import * as classnames from 'classnames'
import * as React from 'react'
import { compose } from 'recompose'
const style = require('./Todo.scss')
const TodoView = () => (
	<div className = {classnames(style.form, 'u-flex--center')}>
		<div className = {classnames(`${style.form}__title`)}>
			<h1>Enjoy your life!</h1>
		</div>
		<div>
			<button>Your Plan</button>
			<button>Add</button>
			<button>Advance</button>
		</div>
	</div>
)
export const Todo = compose()(TodoView)
