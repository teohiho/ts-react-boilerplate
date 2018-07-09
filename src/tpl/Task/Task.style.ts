import { Theme } from '@material-ui/core'
import createStyles from '@material-ui/core/styles/createStyles'
import { dangerColor, defaultFont, primaryColor } from 'theme/default'

const taskStyle = (theme: Theme) => createStyles({
	// ...tooltipStyle,
	// ...checkboxAdnRadioStyle,
	table: {
		marginBottom: '0',
		overflow: 'visible',
	},
	// tableRow: {
	//   // position: 'relative',
	//   borderBottom: '1px solid #dddddd',
	//   display: 'flex',
	//   // flex: 1,
	//   flexDirection: 'row',
	//   height: 'auto',
	// },
	textRoot: {
		width: '100%',
	},
	// tableActions: {
	//   display: 'flex',
	//   border: 'none',
	//   padding: '12px 0px !important',
	//   verticalAlign: 'middle',
	//   // width: '10px',
	// },
	tableCell: {
		...defaultFont,
		// padding: '8px',
		// verticalAlign: 'middle',
		// border: 'none',
		// lineHeight: '1.42857143',
		fontSize: '14px',
	},
	// tableActionButton: {
	//   width: '27px',
	//   height: '27px',
	// },
	// tableActionButtonIcon: {
	//   width: '17px',
	//   height: '17px',
	// },
	// edit: {
	//   backgroundColor: 'transparent',
	//   color: primaryColor,
	//   boxShadow: 'none',
	// },
	// close: {
	//   backgroundColor: 'transparent',
	//   color: dangerColor,
	//   boxShadow: 'none',
	// },


	tooltip: {
		padding: '10px 15px',
		minWidth: '130px',
		color: '#555555',
		// lineHeight: '1.7em',
		background: '#FFFFFF',
		border: 'none',
		borderRadius: '3px',
		boxShadow:
			'0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2)',
		maxWidth: '200px',
		textAlign: 'center',
		fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
		fontSize: '12px',
		fontStyle: 'normal',
		// fontWeight: "400",
		textShadow: 'none',
		textTransform: 'none',
		letterSpacing: 'normal',
		wordBreak: 'normal',
		wordSpacing: 'normal',
		wordWrap: 'normal',
		whiteSpace: 'normal',
		lineBreak: 'auto',
	},

	// rootCellCheck: {
	//   // width: '5px',
	//   padding: 0,
	//   borderBottom: '0px',
	// },
	// rootCheck: {
	//   justifyContent: 'left',
	// },
	// checked: {
	//     color: primaryColor + '!important',
	//   },
		// checkedIcon: {
		//   width: '20px',
		//   height: '20px',
		//   border: '1px solid rgba(0, 0, 0, .54)',
		//   borderRadius: '3px',
		// },
		// uncheckedIcon: {
		//   width: '0px',
		//   height: '0px',
		//   padding: '10px',
		//   border: '1px solid rgba(0, 0, 0, .54)',
		//   borderRadius: '3px',
		// },
		inputNewTask: {
		color: 'black',
		},
		radio: {
		color: primaryColor + '!important',
		},
		radioChecked: {
		width: '20px',
		height: '20px',
		border: '1px solid ' + primaryColor,
		borderRadius: '50%',
		},
		radioUnchecked: {
		width: '0px',
		height: '0px',
		padding: '10px',
		border: '1px solid rgba(0, 0, 0, .54)',
		borderRadius: '50%',
		},
		createTaskField: {
			width: '100%',
		},
		// editTextField: {
		//   // alignContent: 'center',
		//   fontSize: '14px',
		//   flex: 1,
		//   padding: 0,
		//   display: 'flex',
		//   alignItems: 'center',
		//   borderBottom: '0px',
		//   color: 'black',
		// },
})
export default taskStyle
