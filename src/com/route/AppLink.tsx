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
}
const addUrl = withProps<IAppLinkPropsIn, IAppLinkPropsIn>(
	({ to, ...props }) => {
		if (typeof to === 'string') {
			return {
				to,
				...props,
				// to: `1`,
			}
		}
		// return props
	},
)
const AppLink = compose(withRouter)(Link)
