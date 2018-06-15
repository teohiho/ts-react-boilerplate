import * as React from 'react'
import { WithStyles, withStyles } from '@material-ui/core'
import { connect, Dispatch } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import sampleStyle from './Sample.style'
import { TRootState } from 'conf/redux/reducer'

export interface ISampleStateProps {
}

export interface ISampleDispatchProps {

}
export namespace Sample {
  export interface Props extends RouteComponentProps<void>, WithStyles<typeof sampleStyle>, ISampleStateProps, ISampleDispatchProps {

  }

  export interface State {
  }
}
class Sample extends React.Component<Sample.Props, Sample.State> {
  public render(): JSX.Element {
    return (
      <div>
       <span>Sample</span>
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

export default (withStyles(sampleStyle)<Sample.Props>(connect(mapStateToProps, mapDispatchToProps)(Sample)))
