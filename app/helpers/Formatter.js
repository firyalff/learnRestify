'use strict'

class Formatter {
	static toResponseSingle(data, message, error) {
		return {
			result: data
			, message: message
			, error: (error!=null)?error:null
		};
	}	

	static toResponsePaging(data, message, error) {
		const result = {
			items: data.values
			, length : parseInt(data.length)
			, start : parseInt(data.start)
			, remaining: parseInt(data.totalData) - parseInt(data.start) + parseInt(data.length)
		}

		return {
			result: result
			, message: message
			, error: (error!=null)?error:null
		};
	}

	static toResponseDataTable(data, draw, error) {
		const totalFiltered = (data.totalFiltered>data.total)?data.total:data.totalFiltered;

		return {
			draw: (draw)?draw:0
			, recordsTotal: data.total
			, recordsFiltered: totalFiltered
			, data: data.filteredData
		};
	}
}

module.exports= Formatter;