import * as React from 'react'
import { Card, CardHeader, CardContent, WithStyles, withStyles, Tabs, Tab } from '@material-ui/core'
import { connect, Dispatch } from 'react-redux'
import { BugReport, Code, Cloud } from '@material-ui/icons'

import { TRootState } from 'conf/redux/reducer'
import taskcardStyle from './TaskCard.style'

export interface ITaskCardStateProps {
}

export interface ITaskCardDispatchProps {

}
export namespace TaskCard {
  export interface Props extends WithStyles<typeof taskcardStyle>, ITaskCardStateProps, ITaskCardDispatchProps {

  }

  export interface State {
  }
}
class TaskCard extends React.Component<TaskCard.Props, TaskCard.State> {
  state = {
    value: 0,
  }
  handleChange = (event: any, value: number) => {
    this.setState({ value })
  }
  public render(): JSX.Element {
    const { classes } = this.props
    const tabs = [
      {
        label: 'Home',
        IconClass: BugReport,
      },
      {
        label: 'Work',
        IconClass: Code,
      },
      {
        label: 'English',
        IconClass: Cloud,
      },
    ]
    return (
      <div>
        <Card>
          <CardHeader
            classes={{
              root: classes.cardHeader,
              title: classes.cardTitle,
              content: classes.cardHeaderContent,
            }}

            title="Tasks:"
            action={
              <Tabs
                // indicatorColor="primary"
                classes={{
                  flexContainer: classes.tabsContainer,
                  indicator: classes.displayNone,
                }}
                value={this.state.value}
                onChange={this.handleChange}
                textColor="inherit"
              >
                {tabs.map(({ label, IconClass }, index) => (
                  <Tab
                    classes={{
                      labelIcon: classes.labelIcon,
                      label: this.state.value === index ? classes.labelSelected : classes.label,
                      selected: classes.textColorInheritSelected,
                    }}
                    icon={<IconClass className={this.state.value === index ? classes.tabIconSelected : classes.tabIcon } />}
                    label={label}
                  />
                ))}
              </Tabs>
            }
          >
          </CardHeader>
          <CardContent>

          </CardContent>
        </Card>
      </div>
  )
  }
}
const mapStateToProps = (state: TRootState): ITaskCardStateProps => ({
  // ...mapStateToProps
})

const mapDispatchToProps = (dispatch: Dispatch<any>, props: TaskCard.Props): any => ({
  // ...mapDispatchToProps
})

export default (withStyles(taskcardStyle)<TaskCard.Props>(connect(mapStateToProps, mapDispatchToProps)(TaskCard)))
