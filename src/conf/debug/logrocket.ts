import LogRocket from 'logrocket'
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
	subscriptionType: 'pro',
  })
}

export const settingLogrocket = () => {
	const appName = 'tifl/react-ts-boilderplate'
	LogRocket.init(appName)
	// after calling LogRocket.init()
	setupLogRocketReact(LogRocket)
}
