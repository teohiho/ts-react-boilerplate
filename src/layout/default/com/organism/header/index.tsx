import React, { memo } from 'react'
import { compose } from 'recompose'



interface IHeader {
	url?: string
}

const HeaderView = ({ url = '/' }: IHeader) => {
	return (
		<div>
			HEADER
		</div>
	)
}
export default compose<IHeader, IHeader>(memo)(HeaderView)
