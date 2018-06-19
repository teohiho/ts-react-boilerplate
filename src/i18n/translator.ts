import * as fs from 'fs'
import { sync as globSync } from 'glob'
import { mergeDeepRight } from 'ramda'

const filePattern = './src/**/*.lang.json'
const outputLanguageDataDir = './src/i18n/'

const defaultMessages = globSync(filePattern)
  .map(filename => fs.readFileSync(filename, 'utf8'))
  .map(file => JSON.parse(file))
  .reduce((collection, descriptors) => {
    return mergeDeepRight(collection, descriptors)
  },
          {})
fs.writeFileSync(outputLanguageDataDir + 'build.json', `${JSON.stringify(defaultMessages, null, 2)}`)

