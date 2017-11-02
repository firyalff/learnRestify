'use strict';
const bodyParser= require(`restify`).plugins.bodyParser;
const queryParser= require(`restify`).plugins.queryParser;

const Formatter= require(`${process.env.PWD}/app/helpers/Formatter`);

class Http {
	static async apply(server) {
		try{
			server.use(queryParser());
			server.use(bodyParser());
			// server.on('uncaughtExecption', this.errorHandler(req, res, route, err));
		}
		catch(error) {
			console.error(error)
		}
	}

	static async errorHandler(req, res, route, err) {
		const response= Formatter.toResponseSingle({ reqBody: req.params }, 'Error occured', err.status || err.message || err.description || 'Internal Server Error')

		res.send(err.code || 500, response);
	}
}

module.exports= Http;