const { mergeDeepRight } = require('ramda')

const lang1 = {
  en: {
    'Setting.title': 'Setting',
  },
  vi: {
    'Setting.title': 'Cài đặt',
  },
}

const lang2 = {
  en: {
    'Setting.title1': 'Setting1',
  },
  vi: {
    'Setting.title1': 'Cài đặt1',
  },
}

const lang = mergeDeepRight(lang1, lang2)
console.log(lang)
