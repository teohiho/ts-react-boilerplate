import { Button, Card, Elevation, H5, Slider, Spinner } from '@blueprintjs/core'
import { DateRange, DateRangePicker } from '@blueprintjs/datetime'
import * as React from 'react'
import { compose, pure } from 'recompose'
import './BluePrint.scss'

const BluePrint = () => (
	<>
		<h1>Hello I'm Blue Print </h1>
		<Button intent="success" text="button content"  />
		<Card  elevation={0} interactive={false} >
			<H5>
				<a href="#">Analytical applications</a>
			</H5>
			<div className={'title'}>
				USING SASS
				<p>
					SASS P
				</p>
			</div>
			<p>
				User interfaces that enable people to interact smoothly with data, ask better questions, and
				make better decisions.
			</p>
			<Button text="Explore products" />
			<Slider
				// disabled={!hasValue}
				labelStepSize={1}
				min={0}
				max={10}
				// onChange={this.handleValueChange}
				// labelRenderer={this.renderLabel}
				// stepSize={0.1}
				showTrackFill={false}
				value={2}
			/>
			<DateRangePicker
				// value={[this.state.startDate, this.state.endDate]}
				// onChange={this.handleDateChange}
			/>
			<Spinner />
		</Card>
	</>
)
export const BluePrintPage = compose(pure)(BluePrint)
