import { Button, WithStyles, withStyles } from '@material-ui/core'
import * as React from 'react'
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
