import { AnchorButton, Button, ButtonGroup, Callout, Code, FormGroup , H1, Icon, InputGroup } from '@blueprintjs/core'
import * as React from 'react'
const style = require('../../scss/man.scss')
export const BlueprintView = () => (
	<>
		<div className={style.nav}>
			<FormGroup
				helperText="Helper text with details..."
				label="Label A"
				labelFor="text-input"
			>
				<InputGroup id="text-input" className={`${style.nav}__input`} placeholder="Placeholder text" />
			</FormGroup>
		</div>
		<br/>
		<ButtonGroup minimal={true} >
			<Button icon="database">Queries</Button>
			<Button icon="function">Functions</Button>
			<AnchorButton rightIcon="caret-down">Options</AnchorButton>
		</ButtonGroup>
		<br/>
		<Button icon="refresh" />
		{/* icon and rightIcon props */}
		<Button icon="refresh" intent="danger" text="Reset" />
		<Button icon="user" rightIcon="caret-down" text="Profile settings" />
		<Button rightIcon="arrow-right" intent="success" text="Next step" />
		{/* <Icon> children as inline text elements */}
		<Button>
			<Icon icon="document" /> Upload... <Icon icon="small-cross" />
		</Button>
		<Callout title="Visuall important content" intent="danger">
			The component is a simple wrapper around the CSS API that provides props for modifiers and optional
			title element. Any additional HTML props will be spread to the rendered <Code>{'<div>'}</Code>{' '}
			element.
		</Callout>
	</>
)
