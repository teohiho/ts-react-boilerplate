import React from 'react'
import Select from './index'
import { MenuItem } from '@blueprintjs/core'

type OwnProps<T> = {
	items: T[],
	hasFull?: boolean
}

type Props<T> = OwnProps<T> 

const SelectMenu = ({items, hasFull}: Props<any>) => (
	<Select
		items={items}
		itemRenderer={({text, icon}, index) => <MenuItem icon={icon} text={text} key={index} />}
		hasFull={hasFull}
	/>
)

export default SelectMenu