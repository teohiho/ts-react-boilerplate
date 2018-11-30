import classnames from 'classnames'
import MediaQuery from 'react-responsive'
import React from 'react'
import { compose, pure } from 'recompose'
import { Select } from '@blueprintjs/select'
import {
	Button,
	Classes,
	Icon,
	InputGroup,
} from '@blueprintjs/core'


const styles = require('./index.scss')

const SearchBoxView = () => (
	<div className="m-r-sm">
		<MediaQuery orientation="landscape">
			<InputGroup
				className={classnames(styles.textInput)}
				leftIcon="search"
				placeholder="Search anything"
				round
			/>
		</MediaQuery>
		<MediaQuery orientation="portrait">
			<Button
				icon="search"
				// intent="primary"
				className={classnames(Classes.ELEVATION_0, '_u-round-max')} />
		</MediaQuery>
	</ div>
)

export default compose(pure)(SearchBoxView)
