import { compose } from 'ramda'
import { match } from 'react-router'

const removeSlash = (text: string) => text.replace(/(\/)+/g, '/')
export const makeUpdatePath = (match: match<any>) => (path:string) => compose(removeSlash)(`${match.url}${path}`)
