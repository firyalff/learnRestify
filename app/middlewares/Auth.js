'use strict';

class Auth {
	static async checkAuthStatus(req, res, next) {
		if (req.auth !== 1) {
			res.send({ not: 'allowed' });
		}
		else {
   			next();
		}
	}

	static async isAdmin(req, res, next) {
		if (req.admin !== 1) {
			res.send({ not: 'allowed' });
		}
		else {
   			next();
		}

	}
}

module.exports= Auth;