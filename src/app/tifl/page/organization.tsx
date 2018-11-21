import React from 'react'
import tiflRedux from '../redux/index'
import { compose } from 'recompose'
import { connect } from 'react-redux'
const orgRedux = tiflRedux.part.organization

type ActionProps = {
	query: typeof orgRedux.actionCollection.query
}
type Props = ActionProps

const Org = ({query}: Props) => (
	<div>
		<h1 onClick={() => query()}>
			QUERY
		</h1>
	</div>
)

export default compose<Props, {}>(
	connect(undefined, {query: orgRedux.actionCollection.query})
	)(Org)