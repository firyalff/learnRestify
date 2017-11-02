'use strict';

const User= require(`${process.env.PWD}/app/models/User`);

class UserService {

	static getUsers() {
		return [];
	}

	static async getUserById(userId) {
		try{
			var user = await User.model.where('user_id', userId).fetch();

			return user;
		}
		catch(error) {
			console.error(error)
			return error
		}
	}

}

module.exports= UserService;