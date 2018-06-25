import * as React from 'react'
import * as cx from 'classnames'
import { NavLink } from 'react-router-dom'
import {
  withStyles,
  WithStyles,
  Drawer,
  Hidden,
  List,
  ListItem,
  // ListItemIcon,
  ListItemText,
} from '@material-ui/core'
import styles from './SlideBar.style'
import { RouteComponentProps } from 'react-router'
import { FormattedMessage } from 'react-intl'
import { split } from 'ramda'
interface ISlideBarStateProps {

}

interface ISlideBarDispatchProps {}

interface ISlideBarProps extends RouteComponentProps<void>, WithStyles<typeof styles> {
  logo?: string,
  logoText?: string,
  routes: any[],
  color: 'red' | 'orange' | 'green' | 'blue' | 'purple',
  image?: any,
  open?: any,
  handleDrawerToggle?: any,
}

interface ISlideBarState {}

class SlideBar extends React.Component<ISlideBarProps, ISlideBarState> {
  private renderBrand() {
    const { classes,
      // logo,
      logoText,
     } = this.props
    return (
      <div className={classes.logo}>
        <a href="/dashboard" className={classes.logoLink}>
          {/* <div className={classes.logoImage}>
            <img src={logo} alt="logo" className={classes.img} />
          </div> */}
          {logoText}
        </a>
      </div>
    )
  }
  private activeRoute(routeName: string) {
    const { pathname } = this.props.location
    return split('/')(routeName)[1] === split('/')(pathname)[1]
    // return this.props.location.pathname === routeName
    // return true;
  }
  private renderLink() {
    const { classes, routes, color } = this.props
    return (
      <List >
        {routes.map((prop, key) => {
          if (prop.redirect) return null
          const listItemClasses = cx({
            [' ' + classes[color]]: this.activeRoute(prop.path),
          })
          const whiteFontClasses = cx({
            [' ' + classes.whiteFont]: this.activeRoute(prop.path),
          })
          const sidebarName = prop.sidebarI18nId
            ? <FormattedMessage id={prop.sidebarI18nId} />
            : prop.sidebarName
          if (!sidebarName) return null
          return (
            <NavLink
              to={prop.path}
              className={classes.item}
              activeClassName="active"
              key={key}
            >
              <ListItem button className={classes.itemLink + listItemClasses}>
                {/* <ListItemIcon className={classes.itemIcon + whiteFontClasses}>
                  <prop.icon />
                </ListItemIcon> */}
                <ListItemText
                  primary={sidebarName}
                  className={classes.itemText + whiteFontClasses}
                  disableTypography={true}
                />
              </ListItem>
            </NavLink>
          )
        })}
      </List>
    )
  }
  public render() {
    const { classes, image, open, handleDrawerToggle } = this.props
    return (
      <div className={classes.container} >
        <Hidden mdUp>
        <Drawer
          variant="temporary"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {this.renderBrand()}
          <div className={classes.sidebarWrapper}>{this.renderLink()}</div>
          {image !== undefined ? (
            <div
              className={classes.background}
              style={{ backgroundImage: 'url(' + image + ')' }}
            />
          ) : null}
        </Drawer>
      </Hidden>
      <Hidden smDown>
        <Drawer
          anchor="left"
          variant="permanent"
          open
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          {this.renderBrand()}
          <div className={classes.sidebarWrapper}>{this.renderLink()}</div>
          {image !== undefined ? (
            <div
              className={classes.background}
              style={{ backgroundImage: 'url(' + image + ')' }}
            />
          ) : null}
        </Drawer>
      </Hidden>
      </div>
    )
  }
}

export default (withStyles<'drawerPaper'& 'logo'>(styles)<ISlideBarProps>(SlideBar))

