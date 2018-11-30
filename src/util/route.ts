import { compose } from 'ramda'

const removeSlash = (text: string) => text.replace(/(\/)+/g, '/')

export const concatPath = (matchUrl: string) => (path:string) => compose(removeSlash)(`${matchUrl}${path}`)
