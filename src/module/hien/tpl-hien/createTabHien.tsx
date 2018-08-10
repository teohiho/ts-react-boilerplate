import {
	OverflowList,
} from '@blueprintjs/core'

type TbreadCrumbItem = {
	text: string;
	href: string;
}

interface IAppTabPropsOut {
	bredcrumbItems: TbreadCrumbItem[]
}

const renderOverFlowList = (items: TbreadCrumbItem[]) ) => (
	<OverflowList
		items={items}
		overflowRenderer={item => <>{item}</>}
	/>
)
export const createTabHien = (IAppTabPropsOut) => {
	return (props:any) => (

	)
}


