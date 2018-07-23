const path = require('path');

const setEnviroment = (name, defaultValue, targetValue) => {
	const value = targetValue || process.env[name]
	return process.env[name] = value || defaultValue
}

exports.settingEnv = () => {
	setEnviroment('HTTPS', false)
	setEnviroment('PORT', 3000, parseInt(process.env.PORT, 10))
	setEnviroment('HOST', '0.0.0.0')
	setEnviroment('PUBLIC_URL', '/')
	process.env.NODE_PATH = (process.env.NODE_PATH || '')
		.split(path.delimiter)
		.filter(folder => folder && !path.isAbsolute(folder))
		.map(folder => path.resolve(appDirectory, folder))
		.join(path.delimiter);
}