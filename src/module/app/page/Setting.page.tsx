import * as React from 'react'
import { connect, Dispatch } from 'react-redux'
import {
  withStyles,
  WithStyles,
  FormGroup,
  FormControlLabel,
  List,
  ListSubheader,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
} from '@material-ui/core'
import styles from './Setting.style'
import { RouteComponentProps } from 'react-router'
import Switch from '@material-ui/core/Switch'
import { changeTheme, changeLanguage } from '../logic.redux/action'
import { TRootState } from 'conf/redux/reducer'
import { Wifi, Palette, Language  } from '@material-ui/icons'
import { FormattedMessage } from 'react-intl'

export interface ISettingStateProps {
  paletteType: 'light' | 'dark',
  lang: string
}

export interface ISettingDispatchProps {
  switchTheme: () => typeof changeTheme,
  switchLang: (lang: string) => void
}


export namespace Setting {
  export interface Props extends RouteComponentProps<void>, WithStyles<typeof styles>, ISettingStateProps, ISettingDispatchProps {

  }

  export interface State {
  }
}

interface ISwitchOptions {
  onChange: () => void,
  label: string
}
class Setting extends React.Component<Setting.Props, Setting.State> {
  private renderSwitch(title: string, switchOptions: ISwitchOptions) {
    const { onChange, label } = switchOptions
    const { classes } = this.props
    return (
      <div>
        {title}
        <FormControlLabel
          control={
            <Switch
              checked={this.props.paletteType === 'light' ? true : false}
              onChange={onChange}
            />
          }
          classes={{
            label: classes.childLabel,
          }}
          label={label}
        />
      </div>
    )
  }
  public render() {
    const { classes, lang, switchTheme, paletteType, switchLang } = this.props
    const newLang = lang === 'vi' ? 'en' : 'vi'
    return (
      <div>
        <FormGroup classes={{ root: classes.root }}>
          <List subheader={<ListSubheader><FormattedMessage id={'Setting.theme'} /></ListSubheader>}>
            <ListItem>
                <ListItemIcon>
                  <Palette />
                </ListItemIcon>
                <ListItemText primary={<FormattedMessage id={'Setting.darkTheme'} />} />
                <ListItemSecondaryAction>

                  <Switch
                    onChange={switchTheme}
                    checked={paletteType !== 'light'}
                    />
                </ListItemSecondaryAction>
              </ListItem>
          </List>
          <List subheader={<ListSubheader>Lanugage</ListSubheader>}>
            <ListItem>
                <ListItemIcon>
                  <Language />
                </ListItemIcon>
                <ListItemText primary="Vietnam" />
                <ListItemSecondaryAction>
                  <Switch
                    onChange={() => switchLang(newLang)}
                    checked={lang !== 'en'}
                    />
                </ListItemSecondaryAction>
              </ListItem>
          </List>
        </FormGroup>
      </div>
    )
  }
}

const mapStateToProps = (state: TRootState): ISettingStateProps => ({
    // ...mapStateToProps
    lang: state.app.lang,
    paletteType: state.app.theme.paletteType,
})

const mapDispatchToProps = (dispatch: Dispatch<any>, props: Setting.Props): any => ({
    // ...mapDispatchToProps
    switchTheme: () => dispatch(changeTheme()),
    switchLang: (lang: string) => dispatch(changeLanguage(lang)),
})

export default (withStyles(styles)<Setting.Props>(connect(mapStateToProps, mapDispatchToProps)(Setting)))

