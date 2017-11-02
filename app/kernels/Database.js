'use strict';

const knex= require('knex');
const bookshelf= require('bookshelf');

const Config= require(`${process.env.PWD}/app/helpers/Config`);

class Database {
	static init() {
		try {
			const DBConfig= Config.get('database')
			
			var knexConnect= knex({
				client: 'mysql',
				connection: DBConfig.connection
			});

			var bookshelfConnect = bookshelf(knexConnect);
			return bookshelfConnect;
		}
		catch(error) {
			console.error(error);
			return error;
		}

	}
}

module.exports= Database.init();