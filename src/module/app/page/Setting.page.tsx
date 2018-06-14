import * as React from 'react'
import { connect, Dispatch } from 'react-redux'
import {
  withStyles,
  WithStyles,
  FormGroup,
  FormControlLabel,
} from '@material-ui/core'
import styles from './Setting.style'
import { RouteComponentProps } from 'react-router'
import Switch from '@material-ui/core/Switch'
import { changeTheme } from '../logic.redux/action'

export interface ISettingStateProps {
  paletteType: 'light' | 'dark'
}

export interface ISettingDispatchProps {
  switchTheme: () => typeof changeTheme
}


export namespace Setting {
  export interface Props extends RouteComponentProps<void>, WithStyles<typeof styles>, ISettingStateProps, ISettingDispatchProps {

  }

  export interface State {
  }
}


class Setting extends React.Component<Setting.Props, Setting.State> {
  public render() {
    return (
      <FormGroup row>
        <FormControlLabel
          control={
            <Switch
              checked={this.props.paletteType === 'light' ? true : false}
              onChange={this.props.switchTheme}
            />
          }
          label="Light"
        />
    </FormGroup>
    )
  }
}

const mapStateToProps = (state: any): ISettingStateProps => ({
    // ...mapStateToProps
    paletteType: state.app.theme.paletteType,
})

const mapDispatchToProps = (dispatch: Dispatch<any>, props: Setting.Props): any => ({
    // ...mapDispatchToProps
    switchTheme: () => dispatch(changeTheme()),
})

export default (withStyles(styles)<Setting.Props>(connect(mapStateToProps, mapDispatchToProps)(Setting)))

