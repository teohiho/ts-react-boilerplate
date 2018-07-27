import { Button, InputGroup } from '@blueprintjs/core'
import { Select } from '@blueprintjs/select'

import * as React from 'react'
import { compose, pure } from 'recompose'

import './SearchBox.scss'

const SearchContext = () => (
	<Select
		items={
			['a']
		}
		itemRenderer={(item: string) => (<> {item} </>)}
		onItemSelect={() => {}}
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
		<SearchContext />
		<InputGroup
			className="textinput"
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
