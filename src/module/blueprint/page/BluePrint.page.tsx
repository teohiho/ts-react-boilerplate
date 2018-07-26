import {
	Button,
	Card,
	Colors,
	Elevation,
	H5,
	Navbar,
	NavbarDivider,
	NavbarGroup,
	NavbarHeading,
	Slider,
	Spinner,
	Utils,
	} from '@blueprintjs/core'
import { DateRange, DateRangePicker } from '@blueprintjs/datetime'
import { withStyles, WithStyles } from '@material-ui/core'
import * as React from 'react'
import { RouteComponentProps, RouteProps } from 'react-router'
import { compose, pure } from 'recompose'
import './BluePrint.scss'
import bluePrintStyle from './BluePrint.style'
import { MyButton } from './Button'
interface IBluePrintPropsOut {

}
interface IBluePrintPropsIn extends WithStyles<typeof bluePrintStyle>, RouteComponentProps<any> {

}

const BluePrint = ({ classes, location, match }: IBluePrintPropsIn) => (
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
			<MyButton name={'a'} />
			<Navbar>
				<NavbarGroup >
					<NavbarHeading>Blueprint</NavbarHeading>
					<NavbarDivider />
					<Button  icon="home" text="Home" />
					<Button  icon="document" text="Files" />
				</NavbarGroup>
			</Navbar>
		</Card>
	</>
)
const test = () => {
	// const a = Colors.
}
export const BluePrintPage = compose<IBluePrintPropsOut, IBluePrintPropsIn>(withStyles(bluePrintStyle), pure)(BluePrint)
