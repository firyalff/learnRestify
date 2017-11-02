'use strict';
const Utils= require(`${process.env.PWD}/app/helpers/Utils`);

class Models {
	constructor() {
		this.setModels();
	}

	async setModels() {
		try {
			var modelFilenames= await Utils.getDirectoryContentNames(__dirname)
			
			modelFiles.forEach( (modelName, index)=> {
				registeredModels[ctrlName] = require(`${__dirname}/${modelName}`)
			})	

			this.models = registeredModels;

			return true;
		}
		catch(error) {
			console.error(error);
			return error;
		}
	}
}

module.exports= Models