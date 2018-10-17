import { compose } from 'ramda'
import { match } from 'react-router'

const removeSlash = (text: string) => text.replace(/(\/)+/g, '/')
export const concatPath = (matchUrl: string) => (path:string) => compose(removeSlash)(`${matchUrl}${path}`)
