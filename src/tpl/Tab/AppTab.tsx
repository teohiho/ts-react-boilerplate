import * as React from 'react'
import { CardContent, WithStyles, withStyles, Tabs, Tab } from '@material-ui/core'
import { connect, Dispatch } from 'react-redux'
import * as classNames from 'classnames'

import appTabStyle from './AppTab.style'
import { TRootState } from 'conf/redux/reducer'
import { AppCard } from '../Card/AppCard'
import CardHeader from '../Card/CardHeader'
import CardBody from '../Card/CardBody'

export interface IAppTabStateProps {
}

export interface IAppTabDispatchProps {

}
export namespace AppTab {
  export interface Props extends WithStyles<typeof appTabStyle>, IAppTabStateProps, IAppTabDispatchProps {
    headerColor?: string,
    plainTabs?:  boolean,
    tabs: any[],
    title?: string,
    rtlActive?: boolean
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
      } = this.props
      const cardTitle = classNames({
        [classes.cardTitle]: true,
        [classes.cardTitleRTL]: rtlActive,
      })
    return (
        <AppCard plain={false}>
            <CardHeader color={headerColor} plain={plainTabs}>
            {title !== undefined ? (
                <div className={cardTitle}>{title}</div>
            ) : null}
            <Tabs
                value={this.state.value}
                onChange={this.handleChange}
                classes={{
                root: classes.tabsRoot,
                indicator: classes.displayNone,
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
const mapStateToProps = (state: TRootState): IAppTabStateProps => ({
  // ...mapStateToProps
})

const mapDispatchToProps = (dispatch: Dispatch<any>, props: AppTab.Props): any => ({
  // ...mapDispatchToProps
})

export default (withStyles(appTabStyle)<AppTab.Props>(connect(mapStateToProps, mapDispatchToProps)(AppTab)))
