import makePanel from 'layout/panel'
import React, { memo } from 'react'
import tiflRedux from '../redux/index'
import { compose, pure } from 'recompose'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


const orgRedux = tiflRedux.part.organization
type ActionProps = {
	query: typeof orgRedux.actionCollection.query,
	queryNext: typeof orgRedux.actionCollection.queryNext,
	save: typeof orgRedux.actionCollection.save,
	search: typeof orgRedux.actionCollection.textSearch,
	addSelect: typeof orgRedux.actionCollection.addSelect,
	removeSelect: typeof orgRedux.actionCollection.removeSelect,
	pickSelect: typeof orgRedux.actionCollection.pickSelect,
}
type Props = ActionProps

const Org = ({ query, save, search, queryNext, addSelect, removeSelect, pickSelect }: Props) => {
	console.log('ORG RENDER?')
	return (
	<div>
		<h1 onClick={() => query()}>
			QUERY
		</h1>
		<h1 onClick={() => queryNext()}>
			QUERY NEXT
		</h1>
		<h1 onClick={() => search('ahihiihi')}>
			SEARCH
		</h1>
		<h1 onClick={() => save('5915975d50a23f00151a79b5', {
			name: 'ahihiihi',
			_etag: '80b70823936626331718d837e173fed95a22a653',
		})}>
			SAVE
		</h1>
		<h1 onClick={() => save('5915975d50a23f00151a79b5', {
			name: '123',
			_etag: '80b70823936626331718d837e173fed95a22a653',
		})}>
			SAVE THROW IS NOT VALID
		</h1>
		<h1 onClick={() => addSelect('1')}>
			ADD SELECTED 1
		</h1>
		<h1 onClick={() => addSelect('2')}>
			ADD SELECTED 2
		</h1>
		<h1 onClick={() => removeSelect('1')}>
			REMOVE SELECTED
		</h1>
		<h1 onClick={() => pickSelect('10')}>
			Pick Selected
		</h1>
		<Link to="/tifl/list/detail">
			<h2> To detail</h2>
		</Link>
		<Link to="/tifl/list/detail">
			<h2> To detail</h2>
		</Link>
		<Link to="/tifl/list/detail">
			<h2> To detail</h2>
		</Link>
		<Link to="/tifl/list/detail">
			<h2> To detail</h2>
		</Link>
		<Link to="/tifl/list/detail">
			<h2> To detail</h2>
		</Link>
		<Link to="/tifl/list/detail">
			<h2> To detail</h2>
		</Link>
		<Link to="/tifl/list/detail">
			<h2> To detail</h2>
		</Link>
	</div>
)}
const Detail = () => (
	<div>
		<h1> Detail </h1>
		<h1> Detail </h1>
		<h1> Detail </h1>
		<h1> Detail </h1>
		<h1> Detail </h1>
		<h1> Detail </h1>
		<h1> Detail </h1>
		<h1> Detail </h1>
		<h1> Detail </h1>
		<h1> Detail </h1>
		<h1> Detail </h1>
		<h1> Detail </h1>
		<h1> Detail </h1>
		<h1> Detail </h1>
		<h1> Detail </h1>
		<h1> Detail </h1>
		<h1> Detail </h1>
		<h1> Detail </h1>
		<h1> Detail </h1>
		<h1> Detail </h1>
		<h1> Detail </h1>
		<h1> Detail </h1>
		<h1> Detail </h1>
		<h1> Detail </h1>
		<h1> Detail </h1>
		<h1> Detail </h1>
		<h1> Detail </h1>
		<h1> Detail </h1>
		<h1> Detail </h1>
		<h1> Detail </h1>
		<h1> Detail </h1>
		<h1> Detail </h1>
	</div>
)

const OrgRedux = compose<Props, {}>(connect(undefined, {
	query: orgRedux.actionCollection.query,
	save: orgRedux.actionCollection.save,
	search: orgRedux.actionCollection.textSearch,
	queryNext: orgRedux.actionCollection.queryNext,
	addSelect: orgRedux.actionCollection.addSelect,
	removeSelect: orgRedux.actionCollection.removeSelect,
	pickSelect: orgRedux.actionCollection.pickSelect,
}),                                 pure)(Org)

const tifl = makePanel(
	{
		id: 'list',
		component: OrgRedux,
	},
	{
		id: 'detail',
		component: Detail,
	},
)

export default tifl
// export default connect(undefined, {
// 		query: orgRedux.actionCollection.query,
// 		save: orgRedux.actionCollection.save,
// 		search: orgRedux.actionCollection.textSearch,
// 		queryNext: orgRedux.actionCollection.queryNext,
// 		addSelect: orgRedux.actionCollection.addSelect,
// 		removeSelect: orgRedux.actionCollection.removeSelect,
// 		pickSelect: orgRedux.actionCollection.pickSelect,
// })(tifl)
