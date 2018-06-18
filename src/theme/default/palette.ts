import { TTheme } from '../../module/app/logic.redux/initalState'

export const getPalette = (paletteType: TTheme = 'light') => ({
  type: paletteType,
  // primary: {
  //   light: '#e5e5e5',
  //   main: '#727272',
  //   dark: '#363839',
  //   contrastText: '#fff',
  // },
  // secondary: {
  //   light: '#ff5e50',
  //   main: '#e41e26',
  //   dark: '#a90000',
  //   contrastText: '#fff',
  // },
  // text: {
  //   primary: 'rgba(0, 0, 0, 0.87)',
  //   secondary: 'rgba(0, 0, 0, 0.54)',
  //   disabled: 'rgba(0, 0, 0, 0.38)',
  //   hint: 'rgba(0, 0, 0, 0.38)',
  // },
  background: {
    default: paletteType === 'light' ? '#e5e5e5' : '#08294b',
  },
})
