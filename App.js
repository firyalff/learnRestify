"use strict";
if (process.env.NODE_ENV !== 'local') {
	const newrelic= require('newrelic');
}

const restify= require('restify');

const Config= require(`./app/kernels/Config`);
const Http= require(`./app/kernels/Http`);
const Validator= require(`./app/kernels/Validator`);
const Security= require(`./app/kernels/Security`);
const Routing= require(`./app/kernels/Routing`);

const ConfigHelper= require(`./app/helpers/Config`);


class App {

	constructor() {
		this.app= restify.createServer();

		this.init(this.app)
	}

	async init(app) {
		await Config.apply(app)

		await Http.apply(app)
		await Validator.apply(app)
		await Security.apply(app)
		await Routing.apply(app)

		this.app.listen(ConfigHelper.get('app').port, ()=> {
			console.log(`server listening on ${ConfigHelper.get('app').port}`);
		})
	}
}

module.exports = App;
