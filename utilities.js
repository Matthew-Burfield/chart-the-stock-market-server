const getBaseUrl = env => {
	return env === 'production' ? 'https://burfield-stocks.surge.sh' : 'http://localhost:3000'
}

module.exports = {
	getBaseUrl,
}

