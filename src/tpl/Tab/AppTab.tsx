import * as React from 'react'
import { CardContent, WithStyles, withStyles, Tabs, Tab } from '@material-ui/core'
import { connect, Dispatch } from 'react-redux'
import * as classNames from 'classnames'

import appTabStyle from './AppTab.style'
import { TRootState } from 'conf/redux/reducer'
import { AppCard } from '../Card/AppCard'
import CardHeader from '../Card/CardHeader'
import CardBody from '../Card/CardBody'
import AppCardHeader from './component/AppCardHeader'

export interface IAppTabStateProps {
}

export interface IAppTabDispatchProps {

}
export interface ITab {
    tabName: string,
    tabIcon?: any,
    tabContent?: any
}
export namespace AppTab {
  export interface Props extends WithStyles<typeof appTabStyle>, IAppTabStateProps, IAppTabDispatchProps {
    headerColor?: string,
    plainTabs?:  boolean,
    tabs: ITab[],
    title?: string,
    rtlActive?: boolean,
    renderLeft?: () => void
  }

  export interface State {
  }
}
class AppTab extends React.Component<AppTab.Props, AppTab.State> {
    state = {
        value: 0,
      }

    handleChange = (event: any, value: any) => {
        this.setState({ value })
    }
    public render(): JSX.Element {
        const {
            classes,
            headerColor,
            plainTabs,
            tabs,
            title,
            rtlActive,
            renderLeft,
        } = this.props
        const cardTitle = classNames({
            [classes.cardTitle]: true,
            [classes.cardTitleRTL]: rtlActive,
        })
        return (
            <AppCard plain={false}>
                <CardHeader color={headerColor} plain={plainTabs} tabSeletedId={this.state.value} >
                {title !== undefined ? (
                    <div className={cardTitle}>{title}</div>
                ) : null}
                {renderLeft
                    ? (<div className={cardTitle}> {renderLeft()} </div>)
                    : null
                }
                <Tabs
                    value={this.state.value}
                    onChange={this.handleChange}
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
                {/* <AppCardHeader
                    headerColor={headerColor}
                    plainTabs
                    tabs={tabs}
                    title={title}
                    rtlActive
                    renderLeft={renderLeft}
                    value={this.state.value}
                    handleChange={this.handleChange}
                /> */}
                <CardBody>
                {tabs.map((prop, key) => {
                    if (key === this.state.value) {
                    return <div key={key}>{prop.tabContent}</div>
                    }
                    return null
                })}
                </CardBody>
        </AppCard>
    )
  }
}


export default (withStyles(appTabStyle)<AppTab.Props>(AppTab))
