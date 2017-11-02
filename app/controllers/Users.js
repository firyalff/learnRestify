`use strict`;
const Formatter= require(`${process.env.PWD}/app/helpers/Formatter`);

const UserService= require(`${process.env.PWD}/app/services/User`)

class Users {
	static async oneUser(req, res, next) {
		const user= await UserService.getUserById(req.params.id);
		
		let response= Formatter.toResponseSingle({user: user}, 'User is good')
		res.send(response);
   		next();
	}

	static multiUser(req, res, next) {
		const users= UserService.getUsers();
		
		let response= Formatter.toResponseSingle({users: users}, 'Users is good')
		res.send(response);
   		next();
	}
}

module.exports= Users;