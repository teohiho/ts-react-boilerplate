import { createMuiTheme } from '@material-ui/core'
import { lightTheme } from './theme'


export const getTheme = (paletteType: 'light' | 'dark' = 'light') => {
  return createMuiTheme({
    palette: {
      ...lightTheme.getPalette(paletteType),
    },
  })
}

