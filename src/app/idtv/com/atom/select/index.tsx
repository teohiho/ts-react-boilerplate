import * as Re from 'recompose'
import List from '../list'
import React, { FormEvent } from 'react'
import { Button, InputGroup } from '@blueprintjs/core'
import { handleStringChange } from '@blueprintjs/docs-theme'
import {
	Intent,
	Menu,
	MenuDivider,
	MenuItem,
	TextArea
	} from '@blueprintjs/core'

type OwnProps<T> = {
	items: T[],
	itemRenderer:(item: {[N in keyof T]: T[N]}, index: number) => any,
	hasFull?: boolean
}
type States = {
	searchText: string,
	updateSearch: (text: string) => void

	isHidden: boolean,
	toggle: () => void
}

type Props<T> = States & OwnProps<T> 




const Select = ({ searchText, updateSearch , items, itemRenderer, hasFull, isHidden, toggle }: Props<any>) => (
	<div className='t-background2 p-h-xs p-v-xs'>
		<Button onClick={toggle} style={{width: '100%', justifyContent: 'space-between'}} rightIcon={isHidden? 'chevron-up' : 'chevron-down'}>
			Show/Hide
		</Button>
		{isHidden
			? null
			: (
				<Menu style={{marginTop: 6}}>
					<InputGroup
						leftIcon="search"
						value={searchText}
						placeholder='search'
						onChange={handleStringChange(updateSearch)}
						/>
					<List items={items} hasFull={hasFull} itemRenderer={itemRenderer} searchText={searchText} />
				</Menu>
			)
		}
	</div>
)

const textStateHandler = Re.withStateHandlers(
	{
		searchText: '' as null | string
	},
	{
		updateSearch: ({ searchText }) => (text: string) => ({ searchText: text })
	}
)
const showStateHandler = Re.withStateHandlers(
	{
		isHidden: true,
	}, 
	{
		toggle: ({isHidden}) => () => ({isHidden: !isHidden})
	}
)
export default Re.compose<Props<any>, OwnProps<any>>(textStateHandler, showStateHandler)(Select)
