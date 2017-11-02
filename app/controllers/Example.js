'use strict';
const Formatter= require(`${process.env.PWD}/app/helpers/Formatter`);

class Example {
	static async sayHello(req, res, next) {
		let response= Formatter.toResponseSingle({hello: 'world'}, 'Say hello')
		res.send(response);
   		next();
	}
}

module.exports= Example;