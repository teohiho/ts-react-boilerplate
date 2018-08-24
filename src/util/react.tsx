import * as React from 'react'

export const withPropsChecker = (WrappedComponent: React.ComponentType) => {
  return class PropsChecker extends React.Component {
	componentWillReceiveProps(nextProps: any) {
		Object.keys(nextProps)
		.filter((key) => {
			return nextProps[key] !== this.props[key]
		})
		.map((key) => {
			console.log(
			'changed property:',
			key,
			'from',
			this.props[key],
			'to',
			nextProps[key],
			)
		})
	}
	render() {
		return <WrappedComponent { ...this.props } / >
	}
  }
}
