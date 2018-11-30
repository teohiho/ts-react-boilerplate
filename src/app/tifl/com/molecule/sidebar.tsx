import React from 'react'
import Sidebar from 'react-sidebar'
import { compose, withStateHandlers } from 'recompose'


type State = {
	isOpen: boolean,
}
type StateAction = {
	toggleOpen: () => void,
}
type Props = State & StateAction
const SidebarCustommize = ({ toggleOpen, isOpen }: Props) => (
	<Sidebar
		sidebar={<b>Sidebar content</b>}
		open={isOpen}
		// onSetOpen={this.onSetSidebarOpen}
		styles={{ sidebar: { background: 'white' } }}
	>
	<button onClick={toggleOpen}>
	  Open sidebar
	</button>
  </Sidebar>
)

const openStateHandlere = withStateHandlers(
	{
		isOpen: false,
	},
	{
		toggleOpen: ({ isOpen }) => () => ({ isOpen: !isOpen }),
	},
)

export default compose<Props, {}>(openStateHandlere)(SidebarCustommize)
