import * as React from 'react'
import { WithStyles, withStyles, Typography } from '@material-ui/core'
import { connect, Dispatch } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import homeStyle from './Home.style'
import { TRootState } from 'conf/redux/reducer'

export interface ISampleStateProps {
}

export interface ISampleDispatchProps {

}
export namespace Sample {
  export interface Props extends RouteComponentProps<void>, WithStyles<typeof homeStyle>, ISampleStateProps, ISampleDispatchProps {

  }

  export interface State {
  }
}
class Sample extends React.Component<Sample.Props, Sample.State> {
  public render(): JSX.Element {
    const { classes } = this.props
    return (
      <div className={classes.root}>
       <Typography>Typography</Typography>
      {'This text is raw'}
      <div className={classes.textEffect}>
        {'This text is effected'}
      </div>
      </div>
  )
  }
}
const mapStateToProps = (state: TRootState): ISampleStateProps => ({
  // ...mapStateToProps
})

const mapDispatchToProps = (dispatch: Dispatch<any>, props: Sample.Props): any => ({
  // ...mapDispatchToProps
})

export default (withStyles(homeStyle)<Sample.Props>(connect(mapStateToProps, mapDispatchToProps)(Sample)))
