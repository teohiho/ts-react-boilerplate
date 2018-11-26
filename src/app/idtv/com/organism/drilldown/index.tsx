import React from 'react'
import { Column, Table, TableLoadingOption } from '@blueprintjs/table'
 
const COLUMNS = [
	'Name',
	'Age',
]

const Drilldown = () => (
	<div>
		<h1>Drilldown</h1>
		<Table numRows={5} loadingOptions={[TableLoadingOption.CELLS]}>
			{COLUMNS.map((title, index) => (
				<Column
					name={title}
					key={index}
					// cellRenderer={(rowIndex, columIndex) => (<Cell>'1'</Cell>)}
					// columnHeaderCellRenderer={() => <ColumnHeaderCell name={title}/>}
				/>
			))}
		</Table>
	</div>
)

export default Drilldown
