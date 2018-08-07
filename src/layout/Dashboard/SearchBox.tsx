import { Button, InputGroup } from '@blueprintjs/core'
import { Select } from '@blueprintjs/select'

import * as React from 'react'
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
	<>
		{/* <SearchContext /> */}
		<InputGroup
			className={classnames('m-l-md', styles.textInput)}
			// large={large}
			leftIcon="search"
			// onChange={this.handleFilterChange}
			placeholder="Search anything"
			round
			// rightElement={maybeSpinner}
			// value={filterValue}
		/>
	</>
)

export const SearchBox = compose(pure)(SearchBoxView)
