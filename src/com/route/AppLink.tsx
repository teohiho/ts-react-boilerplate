import * as H from 'history'
import { RouteComponentProps, withRouter } from 'react-router'
import { Link, LinkProps } from 'react-router-dom'
import { compose, withProps } from 'recompose'

interface IAppLinkPropsOut extends LinkProps {}
interface IAppLinkPropsIn extends IAppLinkPropsOut, RouteComponentProps<any> {}


const updateLink = (url: string, to: H.LocationDescriptor) => {
	if (to === 'string') {
		return `${url}${to}`
	}
	if (to === 'object') {
		return to
	}
	return null
}
// const addUrl = withProps<IAppLinkPropsIn, IAppLinkPropsIn>(
// 	({ to, match ...props }) => {
// 		if (typeof to === 'string') {
// 			return {
// 				to,
// 				...props,
// 				// to: `1`,
// 			}
// 		}
// 		// return props
// 	},
// )
const AppLinkView = (props: any) => (
	// <Link {...props} to={`${props.match.url}${props.to}`}>
	// 	{props.children}
	// </Link>
	null
)
const AppLink = compose(withRouter)(AppLinkView)
