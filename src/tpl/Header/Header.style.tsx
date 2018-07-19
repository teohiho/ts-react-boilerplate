import {
  createStyles,
  Theme,
} from '@material-ui/core'
import {
  container,
  dangerColor,
  defaultBoxShadow,
  defaultFont,
  infoColor,
  primaryColor,
  successColor,
  warningColor,
} from 'theme/default'

const themeStyle = (theme: Theme) => createStyles({
  appBar: {
	height: '30px',
	minHeight: '30px',
  },
  container: {
	// ...container,
	height: '70px',
	minHeight: '30px',
  },
  flex: {
	flex: 1,
  },
  title: {
	...defaultFont,
	// lineHeight: "30px",
	fontSize: '23px',
	borderRadius: '3px',
	textTransform: 'none',
	color: 'inherit',
	'&:hover,&:focus': {
		background: 'transparent',
	},
  },
  appResponsive: {
	// top: "8px"
  },
  primary: {
	backgroundColor: primaryColor,
	color: '#FFFFFF',
	// ...defaultBoxShadow
  },
  info: {
	backgroundColor: infoColor,
	color: '#FFFFFF',
	...defaultBoxShadow,
  },
  success: {
	backgroundColor: successColor,
	color: '#FFFFFF',
	...defaultBoxShadow,
  },
  warning: {
	backgroundColor: warningColor,
	color: '#FFFFFF',
	...defaultBoxShadow,
  },
  danger: {
	backgroundColor: dangerColor,
	color: '#FFFFFF',
	...defaultBoxShadow,
  },
})

export default themeStyle
