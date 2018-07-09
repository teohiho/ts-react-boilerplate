import { Theme } from '@material-ui/core'
import createStyles from '@material-ui/core/styles/createStyles'
import { dangerColor, defaultFont, primaryColor } from 'theme/default'

const textfieldStyle = (theme: Theme) => createStyles({
  tableRow: {
	// position: 'relative',
	borderBottom: '1px solid #dddddd',
	display: 'flex',
	// flex: 1,
	flexDirection: 'row',
	height: 'auto',
  },
  rootCellCheck: {
	// width: '5px',
	padding: 0,
	borderBottom: '0px',
  },
  checkedIcon: {
	width: '20px',
	height: '20px',
	border: '1px solid rgba(0, 0, 0, .54)',
	borderRadius: '3px',
  },
  uncheckedIcon: {
	width: '0px',
	height: '0px',
	padding: '10px',
	border: '1px solid rgba(0, 0, 0, .54)',
	borderRadius: '3px',
  },
  checked: {
	color: primaryColor + '!important',
  },
  rootCheck: {
	justifyContent: 'left',
  },
  editTextField: {
	// alignContent: 'center',
	fontSize: '14px',
	flex: 1,
	padding: 0,
	display: 'flex',
	alignItems: 'center',
	borderBottom: '0px',
	color: 'black',
  },
  tableActions: {
	display: 'flex',
	border: 'none',
	padding: '12px 0px !important',
	verticalAlign: 'middle',
	// width: '10px',
  },
  tableActionButton: {
	width: '27px',
	height: '27px',
  },
  tableActionButtonIcon: {
	width: '17px',
	height: '17px',
  },
  edit: {
	backgroundColor: 'transparent',
	color: primaryColor,
	boxShadow: 'none',
  },
  close: {
	backgroundColor: 'transparent',
	color: dangerColor,
	boxShadow: 'none',
  },
})
export default textfieldStyle
