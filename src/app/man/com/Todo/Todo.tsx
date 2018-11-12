import React from 'react'
import classnames from 'classnames'
import { compose } from 'recompose'

const style = require('./Todo.scss')
const TodoView = () => (
	<div className = {classnames(style.form, 'u-flex--center')}>
		<div className = {classnames(`${style.form}__title`)}>
			<h1>Enjoy your life!</h1>
		</div>
		<div className = {classnames(`${style.form}__content`)}>
			<button className = {classnames(`${style.form}__content__btn`, `m-r-md`)}>Your Plan</button>
			<button className = {classnames(`${style.form}__content__btn`, `m-r-md`)}>Add</button>
			<button className = {classnames(`${style.form}__content__btn`)}>Advance</button>
		</div>
		<div>
			<ul>
				<li>
					Text1
				</li>
				<li>
					Text1
				</li>
				<li>
					Text1
				</li>
			</ul>
		</div>
	</div>
)
export const Todo = compose()(TodoView)
