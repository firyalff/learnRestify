'use strict';

export class String {
	static generateRandomString(length, reps) {
		const chars= '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

		var result= '';

		for (var i = 0; i < (length*reps); i++) {
			result+= chars[Math.floor(Math.random() * chars.length)];

			result+= (i==(length-1) && i+1!=length)?:'-':''
		}

		return result;
	}
	
	static getTransferCode(identifier, lastcode) {
		if (lastcode == null) 
			return identifier+'001';
		else
		{
			var prefix = ['00', '0', ''];
			var nextnum = parseInt(lastcode) + 1;

			var newindex = '';

			return identifier+prefix[(String(nextnum).length) - 1]+String(nextnum);
		}
	}
	
	static getDDMMYY() {
		var today = new Date(),
		dd = String(today.getDate()),
		mm = String(today.getMonth()+1),
		yyyy = today.getFullYear();

		if(parseInt(dd)<10){
			dd= `0${dd}`;
		} 
		if(parseInt(mm)<10){
			mm= `0${mm}`;
		} 
		return dd+mm+String(yyyy).substr(2, 4);
	}
	
	static formatDate(dateObjt, withTime) {
		var year = dateObjt.getFullYear(),
		month = dateObjt.getMonth(),
		day = dateObjt.getDate(),
		hour = String(dateObjt.getHours()),
		minute = String(dateObjt.getMinutes()),
		time = '';

		if (withTime) {
			hour = (hour.length > 1)?hour:'0'+hour;
			minute = (minute.length > 1)?minute:'0'+minute;

			time += `, ${hour} ${minute}`;
		}

		const monthList = [
		"Januari", 
		"Februari", 
		"Maret", 
		"April", 
		"Mei", 
		"Juni", 
		"Juli", 
		"Agustus", 
		"September", 
		"Oktober", 
		"November", 
		"Desember"
		];

		const formated= `${day} ${monthList[month]} ${year}${time}`;
		return formated;
	},
}