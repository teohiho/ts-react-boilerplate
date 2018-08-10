import { Button, Classes, Icon, InputGroup } from '@blueprintjs/core'
import { Select } from '@blueprintjs/select'

import * as React from 'react'
import MediaQuery from 'react-responsive'
import { compose, pure } from 'recompose'

const styles = require('./SearchBox.scss')
import * as classnames from 'classnames'

const SearchContext = () => (
	<Select
		items={
			['a']
		}
		itemRenderer={(item: string) => (<div key={item}> {item} </div>)}
		onItemSelect={() => {}}
		className={'m-l-md'}
	>
		 <Button
			// icon="film"
			rightIcon="caret-down"
			text={'Hospital'}
			// disabled={disabled}
		/>
	</Select>
)

const SearchBoxView = () => (
	<div className="m-l-md">
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

export const SearchBox = compose(pure)(SearchBoxView)
