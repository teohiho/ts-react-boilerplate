var R = require('ramda')

const types = ['CHANGE_THEME', 'CHANGE_LANGUAGE']

const typesExpected = R.reduce((oldType, type) => ({ ...oldType, [type]: type }), {})(types)
console.log(typesExpected)