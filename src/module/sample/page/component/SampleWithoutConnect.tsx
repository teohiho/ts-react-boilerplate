import * as React from 'react'
import { WithStyles, withStyles, Button } from '@material-ui/core'
import sampleStyle from './SampleWithoutConnect.style'

export interface ISampleConnectedExtendedProps {
  nameSample: string
}

export namespace Sample {
  export interface Props extends WithStyles<typeof sampleStyle>, ISampleConnectedExtendedProps {

  }
  export interface State {
  }
}
class Sample extends React.Component<Sample.Props, Sample.State> {
  state = {

  }
  public render(): JSX.Element {
    return (
      <div>
       <span>Sample</span>
      </div>
  )
  }
}

export default withStyles(sampleStyle)(Sample)
