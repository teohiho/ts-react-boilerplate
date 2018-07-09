import { Theme } from '@material-ui/core'
import createStyles from '@material-ui/core/styles/createStyles'
import { dangerColor, defaultFont, primaryColor } from 'theme/default'

const textfieldStyle = (theme: Theme) => createStyles({
  edit: {
	// alignContent: 'center',
	fontSize: '14px',
	flex: 1,
	padding: 0,
	display: 'flex',
	alignItems: 'center',
	borderBottom: '0px',
	color: 'black',
  },
  input: {
	color: 'black',
  },
  container: {
	width: '100%',
  },
})
export default textfieldStyle
