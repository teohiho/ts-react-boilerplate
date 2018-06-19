import * as React from 'react'

interface IAppButtonProps {}

interface IAppButtonState {}

class AppButton extends React.Component<IAppButtonProps, IAppButtonState> {
  public render() {
    return (
      <span>Body</span>
    )
  }
}

export default AppButton
