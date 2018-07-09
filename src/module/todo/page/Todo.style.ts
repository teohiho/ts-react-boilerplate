import { Theme } from '@material-ui/core'
import createStyles from '@material-ui/core/styles/createStyles'
import { cardHeader, defaultFont, primaryBoxShadow } from 'theme/default'

const todoStyle = (theme: Theme) => createStyles({
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
  addButton: {
	width: '40px',
	height: '40px',
  },
  addButtonContainer: {
	// borderRightWidth: '10px',
	// borderRightColor: 'red',
	borderRight: '1px solid #1234',
	marginRight: '5px',
	paddingRight: '5px',
  },
  todoContainer: {
	// position: 'relative',
  },
  label: {
	lineHeight: '19px',
	textTransform: 'uppercase',
	fontSize: '12px',
	fontWeight: 'bold',
	color: '#c3c3c3',
  },
  textField: {
	marginLeft: theme.spacing.unit,
	marginRight: theme.spacing.unit,
	width: 200,
  },
  modal: {
	position: 'absolute',
	backgroundColor: theme.palette.background.paper,
	width: theme.spacing.unit * 70,
	height: theme.spacing.unit * 20,
	top: '30%',
	left: '30%',
	justifyContent: 'center',
	alignItems: 'center',
	textAlign: 'center',
	fontSize: '2rem',
	display: 'flex',
	flexDirection: 'column',
	borderRadius: '12px',
  },
  textColorInheritSelected: {
	backgroundColor: 'rgba(255, 255, 255, 0.2)',
	transition: 'background-color .4s',
	color: 'white',
  },
  tabIcon: {
	float: 'left',
	color: '#c3c3c3',

  },
  labelSelected: {
	lineHeight: '19px',
	textTransform: 'uppercase',
	fontSize: '12px',
	fontWeight: 'bold',
	color: 'white',
  },
  tabIconSelected: {
	float: 'left',
	color: 'white',
  },
  absolute: {
	position: 'absolute',
	bottom: 0,
	right: -30,
	// bottom: theme.spacing.unit,
	// right: theme.spacing.unit,
  },
})
export default todoStyle
