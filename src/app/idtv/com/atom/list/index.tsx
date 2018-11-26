import * as R from 'ramda'
import * as Re from 'recompose'
import React, { memo } from 'react'
import { MenuDivider } from '@blueprintjs/core'

type OwnProps = {
	items: any[],
	itemRenderer: (item: any, index: number) => JSX.Element | null,
	searchText:  string | undefined | null,
	hasFull?: boolean
}
type Props = OwnProps

const List = ({items, itemRenderer, searchText, hasFull}: Props) => {
	if (hasFull) {
		const groupFilter = R.groupBy((item: any) => {
			return item.text.indexOf(searchText) >= 0 ? 'filtered' : 'rest'
		}, items)
		return (
			<>
				{groupFilter.filtered && groupFilter.filtered.map(itemRenderer)}
				<MenuDivider />
				{groupFilter.rest && groupFilter.rest.map(itemRenderer)}
			</>
		)
	}
	const itemsFilted = typeof searchText === 'string' 
						? items.filter((item) => item.text.indexOf(searchText) >= 0)
						: items
	return (
		<>
			{itemsFilted.map(itemRenderer)}
		</>
	)

}

export default Re.compose<Props, OwnProps>()(List)