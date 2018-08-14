import { Alignment, AnchorButton, Button, ButtonGroup, FormGroup, InputGroup, Navbar, Tab , Tabs } from '@blueprintjs/core'
import * as React from 'react'
import { compose, pure } from 'recompose'
const style = require('../scss/man.scss')

const SettingPageView = () => (
	<>
		<Tabs id="a">
			<Tab id="b" title="React" panel={<h1>React</h1>} />
			<Tab id="c" title="Angular" panel={<h1>Angular</h1>} />
			<Tab id="e" title="React" panel={<h1>React</h1>} />
			<Tab id="f" title="Angular" panel={<h1>Angular</h1>} />
			<Tabs.Expander />
		</Tabs>
		<br/>
		<FormGroup
			helperText="Helper text with details..."
			label="Label A"
			labelFor="text-input"
			labelInfo="(required)"
		>
			<InputGroup id="text-input" placeholder="Placeholder text" />
		</FormGroup>
		<br/>
		<Navbar>
			<Navbar.Group align={Alignment.LEFT}>
				<Navbar.Heading>Blueprint</Navbar.Heading>
				<Navbar.Divider />
				<Button className="bp3-minimal" icon="home" text="Home" />
				<Button className="bp3-minimal" icon="document" text="Files" />
			</Navbar.Group>
		</Navbar>
		<br/>
		<ButtonGroup minimal={true} >
			<Button icon="database">Queries</Button>
			<Button icon="function">Functions</Button>
			<AnchorButton rightIcon="caret-down">Options</AnchorButton>
		</ButtonGroup>
	</>
)

export const ManPage = compose(pure)(SettingPageView)
