import { Theme } from '@material-ui/core'
import createStyles from '@material-ui/core/styles/createStyles'

const sampleStyle = (theme: Theme) => createStyles({
  root: {
    padding: theme.spacing.unit * 10,
  },
})
export default sampleStyle
