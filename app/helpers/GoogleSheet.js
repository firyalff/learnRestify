const googleSpreadsheet = require('google-spreadsheet');

class GoogleSpreadsheet extends googleSpreadsheet {
	get spreadsheetInfo() {
		return new Promise( (resolve, reject)=> {
			this.getInfo( (err, success)=> {
				if(err) {
					return reject(err);
				}
				else {
					return resolve(success);
				}
			})
		})
	}

	doAuth(credential) {
		return new Promise( (resolve, reject)=> {
			this.useServiceAccountAuth(credential, (err, success)=> {
				if(err) {
					return reject(err);
				}
				else {
					return resolve(success);
				}
			})
		})
	}

	getWorksheet( worksheetTitle, worksheets) {
		const findByTitle= (worksheet)=> {
			return worksheet.title === worksheetTitle
		}
		
		const searchResult= worksheets.find(findByTitle)

		return new Promise( (resolve, reject)=> {
			if(typeof searchResult === 'undefined') {
				return reject({
					message: 'not found'
				});
			}
			else {
				return resolve(searchResult);
			}
		})
	}

	setWorkingsheet( worksheet) {
		return this.currentWorkingsheet = worksheet;
	}

	get workingsheet() {
		return this.currentWorkingsheet;
	}

	getWorksheetRows(worksheetId, options) {
		return new Promise( (resolve, reject)=> {
			this.getRows( worksheetId, options, (err, success)=> {
				if(err) {
					return reject(err);
				}
				else {
					return resolve(success);
				}
			})	
		})
	}

	getWorksheetCells(worksheetId, options) {
		return new Promise( (resolve, reject)=> {
			this.getCells( worksheetId, options, (err, success)=> { 
				if(err) {
					return reject(err);
				}
				else {
					return resolve(success);
				}
			})	
		})
	}

	bulkUpdateCells(cells) {
		if (this.currentWorkingsheet == null) {
			return new Error('no workingsheet provided');
		}

		return new Promise( (resolve, reject)=> {
			this.currentWorkingsheet.bulkUpdateCells( cells, (err, success)=> { 
				if(err) {
					return reject(err);
				}
				else {
					return resolve(success);
				}
			})	
		})
	}

	static saveCell(cell, newValue) {
		return new Promise( (resolve, reject)=> {
			cell.value= newValue
			cell.save( (err, success)=> {
				if(err) {
					return reject(err);
				}
				else {
					return resolve(success);
				}
			})
		})
	}
}

module.exports = GoogleSpreadsheet;
