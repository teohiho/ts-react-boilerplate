import LogRocket from 'logrocket'
import setting from '../setting'
import setupLogRocketReact from 'logrocket-react'

type TUser = {
	id: string,
	name: string,
	email: string,
  }

export const registerUserLogger = (user: TUser) => {
  LogRocket.identify(user.id, {
	...user,
	// Add your own custom user variables here, ie:
	// subscriptionType: 'pro',
  })
}

export const settingLogrocket = () => {
	const appName = setting.logRocketId
	LogRocket.init(appName)
	// after calling LogRocket.init()
	setupLogRocketReact(LogRocket)
}
