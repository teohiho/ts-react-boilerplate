import { Theme } from '@material-ui/core'
import createStyles from '@material-ui/core/styles/createStyles'
import {
  boxShadow,
  dangerColor,
  defaultFont,
  drawerWidth,
  infoColor,
  primaryColor,
  successColor,
  transition,
  warningColor } from 'theme/default'


const appLinkStyle = (theme: Theme) => createStyles({
  whiteFont: {
	color: '#FFFFFF',
  },
  purple: {
	backgroundColor: primaryColor,
	// ...primaryBoxShadow,
	'&:hover': {
		backgroundColor: primaryColor,
		// ...primaryBoxShadow
	},
  },
  item: {
	position: 'relative',
	display: 'block',
	textDecoration: 'none',
  },
  itemLink: {
	width: 'auto',
	transition: 'all 300ms linear',
	margin: '10px 15px 0',
	borderRadius: '3px',
	position: 'relative',
	display: 'block',
	padding: '10px 15px',
	backgroundColor: 'transparent',
	...defaultFont,
  },
  itemIcon: {
	width: '24px',
	height: '30px',
	float: 'left',
	marginRight: '15px',
	textAlign: 'center',
	verticalAlign: 'middle',
	color: 'rgba(255, 255, 255, 0.8)',
  },
  itemText: {
	...defaultFont,
	margin: '0',
	lineHeight: '30px',
	fontSize: '14px',
	color: '#FFFFFF',
  },
  blue: {
	backgroundColor: infoColor,
	boxShadow:
		'0 12px 20px -10px rgba(0,188,212,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(0,188,212,.2)',
	'&:hover': {
		backgroundColor: infoColor,
		boxShadow:
		'0 12px 20px -10px rgba(0,188,212,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(0,188,212,.2)',
	},
  },
  green: {
	backgroundColor: successColor,
	boxShadow:
		'0 12px 20px -10px rgba(76,175,80,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(76,175,80,.2)',
	'&:hover': {
		backgroundColor: successColor,
		boxShadow:
		'0 12px 20px -10px rgba(76,175,80,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(76,175,80,.2)',
	},
  },
  orange: {
	backgroundColor: warningColor,
	boxShadow:
		'0 12px 20px -10px rgba(255,152,0,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(255,152,0,.2)',
	'&:hover': {
		backgroundColor: warningColor,
		boxShadow:
		'0 12px 20px -10px rgba(255,152,0,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(255,152,0,.2)',
	},
  },
  red: {
	backgroundColor: dangerColor,
	boxShadow:
		'0 12px 20px -10px rgba(244,67,54,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(244,67,54,.2)',
	'&:hover': {
		backgroundColor: dangerColor,
		boxShadow:
		'0 12px 20px -10px rgba(244,67,54,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(244,67,54,.2)',
	},
  },
})
export default appLinkStyle
