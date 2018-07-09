import { Theme } from '@material-ui/core'
import createStyles from '@material-ui/core/styles/createStyles'

const sampleStyle = (theme: Theme) => createStyles({
  root: {
	padding: theme.spacing.unit * 2,
	// fontSize: '1rem',
	// color: theme.palette.primary.main,
  },
  textEffect: {
	color: theme.palette.text.primary,
  },

})
export default sampleStyle
