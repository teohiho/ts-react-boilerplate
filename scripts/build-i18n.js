const { generateData } = require('./generate-i18n')

generateData().then(() => {
	console.log('Generate done')
})