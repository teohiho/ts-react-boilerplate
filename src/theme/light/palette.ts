import { getPalette } from '../helper/palette'

const materialPalette = {
	common: {
		black: '#000',
		white: '#fff',
	},
	type: 'light',
	primary: {
		light: '#42A5F5',
		main: '#1976D2',
		dark: '#0D47A1',
		contrastText: '#fff',
	},
	secondary: {
		light: '#EC407A',
		main: '#C2185B',
		dark: '#880E4F',
		contrastText: '#fff',
	},
	error: {
		light: '#FF5722',
		main: '#E64A19',
		dark: '#BF360C',
		contrastText: '#fff',
	},
	grey: {
		50: '#fafafa',
		100: '#f5f5f5',
		200: '#eeeeee',
		300: '#e0e0e0',
		400: '#bdbdbd',
		500: '#9e9e9e',
		600: '#757575',
		700: '#616161',
		800: '#424242',
		900: '#212121',
		A100: '#d5d5d5',
		A200: '#aaaaaa',
		A400: '#303030',
		A700: '#616161',
	},
	contrastThreshold: 3,
	tonalOffset: 0.2,
	text: {
		primary: 'rgba(0, 0, 0, 0.87)',
		secondary: 'rgba(0, 0, 0, 0.54)',
		disabled: 'rgba(0, 0, 0, 0.38)',
		hint: 'rgba(0, 0, 0, 0.38)',
	},
	divider: 'rgba(0, 0, 0, 0.12)',
	background: {
		paper: '#fff',
		default: '#fafafa',
	},
	action: {
		active: 'rgba(0, 0, 0, 0.54)',
		hover: 'rgba(0, 0, 0, 0.08)',
		hoverOpacity: 0.08,
		selected: 'rgba(0, 0, 0, 0.14)',
		disabled: 'rgba(0, 0, 0, 0.26)',
		disabledBackground: 'rgba(0, 0, 0, 0.12)',
	},
}
export const palette = getPalette(materialPalette)

export type Tpalette = typeof palette
export type TBasicPalette = typeof materialPalette
