`use strict`;
const Formatter= require(`${process.env.PWD}/app/helpers/Formatter`);

class Health {
	static check(req, res, next) {
		let response= Formatter.toResponseSingle({health: 'good'}, 'Health is good')
		res.send(response);
   		next();
	}
}

module.exports= Health;