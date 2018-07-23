const { PORT, HTTPS, HOST } = process.env
exports.getConfiguration = () => ({
	port: parseInt(PORT),
	protocol: HTTPS === 'false' ? 'http' : 'https',
	host: HOST,
	https: HTTPS === 'false' ? false : true
})