import * as React from 'react'
import { Button } from '@material-ui/core'

interface IAppButtonProps {}

interface IAppButtonState {}

class AppButton extends React.Component<IAppButtonProps, IAppButtonState> {
  public render() {
    return (
      <Button variant="contained" >
        Default
      </Button>
    )
  }
}

export default AppButton
