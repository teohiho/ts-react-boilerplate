import { Button, Tab, Tabs, WithStyles, withStyles } from '@material-ui/core'
import * as classNames from 'classnames'
import * as React from 'react'
import CardHeader from 'tpl/Card/CardHeader'
import { ITab } from '../AppTab'
import AppCardHeaderStyle from './AppCardHeader.style'

export interface IAppCardHeaderConnectedExtendedProps {
  headerColor?: string,
  plainTabs?:  boolean,
  tabs: ITab[],
  title?: string,
  rtlActive?: boolean,
  renderLeft?: () => void
  value: number
  handleChange:  (event: any, value: any) => void
}

export namespace AppCardHeader {
  export interface Props extends WithStyles<typeof AppCardHeaderStyle>, IAppCardHeaderConnectedExtendedProps {

  }
  export interface State {
  }
}
class AppCardHeader extends React.PureComponent<AppCardHeader.Props, AppCardHeader.State> {
  public render(): JSX.Element {
	const {
		classes,
		headerColor,
		plainTabs,
		tabs,
		title,
		rtlActive,
		renderLeft,
		value,
		handleChange,
	} = this.props
	const cardTitle = classNames({
		[classes.cardTitle]: true,
		[classes.cardTitleRTL]: rtlActive,
	})
	return (
		<CardHeader color={headerColor} plain={plainTabs} >
			{title !== undefined ? (
				<div className={cardTitle}>{title}</div>
			) : null}
			{renderLeft
				? (<div className={cardTitle}> {renderLeft()} </div>)
				: null
			}
			<Tabs
				value={value}
				onChange={handleChange}
				classes={{
					root: classes.tabsRoot,
					indicator: classes.displayNone,
					scrollButtons: classes.scrollableTab,
				}}
				scrollable
				scrollButtons="auto"
			>
				{tabs.map((prop, key) => {
					let icon = {}
					if (prop.tabIcon) {
						icon = {
						icon: <prop.tabIcon />,
						}
					}
					return (
						<Tab
							classes={{
								root: classes.tabRootButton,
								labelContainer: classes.tabLabelContainer,
								label: classes.tabLabel,
								selected: classes.tabSelected,
								wrapper: classes.tabWrapper,
							}}
							key={key}
							label={prop.tabName}
							{...icon}
						/>
					)
				})}
			</Tabs>
		</CardHeader>
	)
  }
}

export default withStyles(AppCardHeaderStyle)(AppCardHeader)
