import * as React from 'react'
import { compose, pure } from 'recompose'
import './Loading.scss'
const LoadingView = () => (
	// <h1>Loading</h1>
	<div className="c-loading">
		<div className="u-flex-center">
			<div className="sk-circle">
				<div className="sk-circle1 sk-child"></div>
				<div className="sk-circle2 sk-child"></div>
				<div className="sk-circle3 sk-child"></div>
				<div className="sk-circle4 sk-child"></div>
				<div className="sk-circle5 sk-child"></div>
				<div className="sk-circle6 sk-child"></div>
				<div className="sk-circle7 sk-child"></div>
				<div className="sk-circle8 sk-child"></div>
				<div className="sk-circle9 sk-child"></div>
				<div className="sk-circle10 sk-child"></div>
				<div className="sk-circle11 sk-child"></div>
				<div className="sk-circle12 sk-child"></div>
			</div>
			<h3 className={'c-loading__text'}>
				Just a moment.
			</h3>
		</div>
	</ div>
)
export const Loading = compose(pure)(LoadingView)
