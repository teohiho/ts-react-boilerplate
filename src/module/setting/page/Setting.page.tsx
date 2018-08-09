import { Button, InputGroup, MenuItem, Switch, Tab, Tabs } from '@blueprintjs/core'
import { Select } from '@blueprintjs/select'
import { TRootState } from 'conf/redux/reducer'
import { changeTheme } from 'module/setting/logic.redux/action'
import { TPaletteType } from 'module/setting/logic.redux/initalState'
import * as React from 'react'
import { connect, Dispatch } from 'react-redux'
import { compose, pure } from 'recompose'
import { createTab } from 'tpl/tab'
import { v4 } from 'uuid'


interface ISettingPagePropsOut {

}

interface ISettingPageStateToProps {
	paletteType: TPaletteType
}

interface ISettingPageDispatchToProps {
	switchTheme: () => void
}

interface ISettingPagePropsIn extends ISettingPagePropsOut, ISettingPageStateToProps, ISettingPageDispatchToProps {

}

const SettingPageView = ({ switchTheme, paletteType }: ISettingPagePropsIn) => (
	<>
		Dark Theme:
		<Switch checked={paletteType === 'dark' ? true : false} onChange={switchTheme} />
	</>
)

const mapStateToProps = (state: TRootState) => ({
	paletteType: state.setting.theme.paletteType,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
	switchTheme: () => dispatch(changeTheme()),
})
const withRedux = connect(mapStateToProps, mapDispatchToProps)

const SettingTheme = compose<ISettingPagePropsIn, ISettingPagePropsOut>(withRedux, pure)(SettingPageView)

const ReactView = () => (<h1>React</h1>)
const SettingLanguage = () => (
	<>
		Select language:
		<Select
			items={[
				{
					id: 'vi',
					text: 'Vietnamese',
				},
				{
					id: 'en',
					text: 'English',
				},
			]}
			itemRenderer={({ text }) => (
				<>
					{/* {text}
					<br /> */}
					<MenuItem
						text={text}
					/>
				</>
			)}
			onItemSelect={({ text }) => <>{text}</>}
		>
			{/* <InputGroup className="m-l-sm" value={'Vietnamese'} disabled/> */}
			<Button className="m-l-sm">
				Vietnamese
			</Button>
		</Select>
	</>

)

const addTab = createTab({
	breadcrumbItems: [
		{
			href: '#',
			text: 'Grand',
		},
		{
			href: '#',
			text: 'Parent',
		},
		{
			text: 'Child',
		},
	],
	tabs: [
		{
			id: 'th',
			title: 'Theme',
			panel: <SettingTheme />,
		},
		{
			id: 'la',
			title: 'Language',
			panel: <SettingLanguage />,
		},
	],
})


export const SettingPage = compose<ISettingPagePropsIn, ISettingPagePropsOut>()(addTab)
