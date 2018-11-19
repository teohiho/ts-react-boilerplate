export type TPaletteType = 'light' | 'dark'

export type TSettingState = {
	theme: {
		paletteType: TPaletteType,
	},
	lang: string,
}


export const initialState: TSettingState = {
  theme: {
	paletteType: 'light' as TPaletteType,
  },
  lang: 'en',
}
