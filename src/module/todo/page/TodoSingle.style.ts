import { Theme } from '@material-ui/core'
import createStyles from '@material-ui/core/styles/createStyles'
import { cardHeader, defaultFont, primaryBoxShadow } from 'theme/default'

const todoStyle = (theme: Theme) => createStyles({
  container: {
    padding: theme.spacing.unit * 10,
  },
})
export default todoStyle
