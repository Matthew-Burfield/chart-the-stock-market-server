const cors = require('cors')
const express = require('express')
const getBaseUrl = require('./utilities').getBaseUrl

const startServer = () => {
	const app = express()

	const baseUrl = getBaseUrl(app.get('env'))
	const port = process.env.PORT || 8000
	const corsOptions = {
		origin: baseUrl,
		optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
	}
	app.use(cors(corsOptions))

	app.get('/', (req, res) => {
		res.send('Hello world!')
	})

	return new Promise(resolve => {
		const server = app.listen(port, () => {
			console.log(`Example app listening on port ${port}, in ${app.get('env')} mode!`)
			resolve(server)
		})
	})
}

module.exports = startServer

