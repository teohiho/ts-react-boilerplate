import React from 'react'
import SelectMenu from './selectMenu'

type OwnProps = {
	items: string[]
	hasFull?: boolean
}

const SelectText = ({ items, hasFull }: OwnProps) => (
	<SelectMenu items={items.map(item => ({text: item}))} hasFull={hasFull} />
)

export default SelectText