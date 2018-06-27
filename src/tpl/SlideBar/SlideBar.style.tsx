import {
  Theme,
  createStyles,
} from '@material-ui/core'

import {
  drawerWidth,
  transition,
  boxShadow,
  primaryColor,
  infoColor,
  successColor,
  warningColor,
  dangerColor,
  defaultFont,
} from '../../theme/default'
// import { StyleRules } from "@material-ui/core/styles";



const themeStyle = (theme: Theme) => createStyles({
  container: {
  },
  drawerPaper: {
    border: 'none',
    // width: drawerWidth,
    height: '100vh',
    ...transition,
    ...boxShadow,
  },
  logo: {
    position: 'relative',
    padding: '15px 15px',
    zIndex: 4,
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: '0',

      height: '1px',
      right: '15px',
      width: 'calc(100% - 30px)',
      backgroundColor: 'rgba(180, 180, 180, 0.3)',
    },
  },
  logoLink: {
    ...defaultFont,
    textTransform: 'uppercase',
    padding: '5px 0',
    display: 'block',
    fontSize: '18px',
    textAlign: 'left',
    fontWeight: 400,
    lineHeight: '30px',
    textDecoration: 'none',
    backgroundColor: 'transparent',
    '&,&:hover': {
      color: '#FFFFFF',
    },
  },
  logoImage: {
    width: '30px',
    display: 'inline-block',
    maxHeight: '30px',
    marginLeft: '10px',
    marginRight: '15px',
  },
  img: {
    width: '35px',
    top: '22px',
    position: 'absolute',
    verticalAlign: 'middle',
    border: '0',
  },
  background: {
    zIndex: 1,
    position: 'fixed',
    height: '100%',
    // width: "100%",
    width: drawerWidth,
    display: 'block',
    top: 0,
    left: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    '&:after': {
      position: 'absolute',
      zIndex: 3,
      width: '100%',
      height: '100%',
      content: '""',
      display: 'block',
      background: '#000',
      opacity: 0.7,
    },
  },
  list: {
    marginTop: '20px',
    paddingLeft: '0',
    paddingTop: '0',
    paddingBottom: '0',
    marginBottom: '0',
    listStyle: 'none',
  },


  sidebarWrapper: {
    position: 'relative',
    height: 'calc(100vh - 75px)',
    overflow: 'auto',
    width: '260px',
    zIndex: 4,
    overflowScrolling: 'touch',
  },
})

export default themeStyle
