import React, { memo } from 'react'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { Icon, Text } from '@blueprintjs/core'
import { TRootState } from 'conf/redux/reducer'


const BreadcrumbView = ({ breadcrumbItems }: IBreadcrumbPropsIn) => (
	<>
		{addChevronRight(breadcrumbItems)}
	</>
)

interface IBreadcrumbReduxState {
	breadcrumbItems: string[]
}
interface IBreadcrumbPropsOut {}
interface IBreadcrumbPropsIn  extends IBreadcrumbPropsOut, IBreadcrumbReduxState {}
const joinFrom2Element = (items: string[], renderComponent: any, renderItem: (text: string, index?: number) => void) => {
	return items.reduce(
		(previous, item, index) => {
			if ((index === items.length - 1)) {
				return [...previous, renderItem(item, index)]
			}
			return [...previous, renderItem(item), renderComponent(index)]
		},
		[],
	)
}
const addChevronRight = (items: string[]) => {
	const renderText = (text: string, index: number) => <Text key={index}> {text}</Text>
	const result = joinFrom2Element(items, (index: string) => <Icon key={index} icon="chevron-right"/>, renderText)
	return (
		<div className={'u-flex--row'}>
			{result}
		</div>
	)
}

const mapStateToProps = (state: TRootState) => ({
	breadcrumbItems: state.layout.frameworkNavbar.breadcrumbItems,
})
const addRedux = connect(mapStateToProps)


export const Breadcrumb
	= compose<IBreadcrumbPropsIn, IBreadcrumbPropsOut>(memo, addRedux)(BreadcrumbView)
