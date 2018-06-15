import { Theme } from '@material-ui/core'
import createStyles from '@material-ui/core/styles/createStyles'
import { cardHeader, defaultFont, primaryBoxShadow } from 'theme/default'

const taskCardStyle = (theme: Theme) => createStyles({
  container: {
    padding: theme.spacing.unit * 10,
  },
  cardHeader: {
    flex: 'none',
    ...cardHeader,
    ...defaultFont,
    background: 'linear-gradient(60deg, #ab47bc, #8e24aa)',
    ...primaryBoxShadow,
  },
  cardTitle: {
    ...defaultFont,
    float: 'left',
    // fontWeight: '500',
    padding: '10px 10px 10px 0',
    lineHeight: '24px',
    fontSize: '14px',
    color: '#FFFFFF',
  },
  cardHeaderContent: {
    flex: 'none',
  },
  tabsContainer: {

  },
  displayNone: {

  },
  tabWrapper: {

  },
  labelIcon: {

  },
  label: {
    lineHeight: '19px',
    textTransform: 'uppercase',
    fontSize: '12px',
    fontWeight: 'bold',
    marginLeft: '-10px',
    color: '#c3c3c3',
  },
  textColorInheritSelected: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    transition: 'background-color .4s',
    color: 'white',
  },
  tabIcon: {
    float: 'left',
    [theme.breakpoints.down('sm')]: {
      marginTop: '-2px',
    },
    color: '#c3c3c3',

  },
  labelSelected: {
    color: 'white',
  },
  tabIconSelected: {
    color: 'white',
  },
})
export default taskCardStyle
