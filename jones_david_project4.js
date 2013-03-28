//alert("JavaScript works!");

//David Jones
//SDI 1303
//Project 4
//Code Library

/////////////////////
// String Functions//
/////////////////////

var strLib = function () {
	// Function to check whether string is a phone number or not.
	var phnNumChk = function(phoneNumber){
		var isPhnNum = true;
		var numChk = isNaN(phoneNumber[0,1,2,4,5,6,8,9,10,11]);
		
		if (phoneNumber.length === 12 && phoneNumber[3] === "-" && 
			phoneNumber[7] === "-" && numChk === false) {
				return isPhnNum;								//Project 2: Boolean Output
			} else {
				isPhnNum = false;
				return isPhnNum;
			}
	}; //End of phnNumChk
	
	
	//Function to check whether string is an e-mail or not.
	var emailChk = function(emailAddress){
		var isEmail = true;										//Project 2: Scope (var keyword)
		if (emailAddress.contains("@") && emailAddress.endsWith(".com")){
			return isEmail;
		} else {
			var isEmail = false;
			return isEmail;
		}
	}; // End of emailChk Function
	
	//Function to check whether string is a URL or not.
	var urlChk = function(url){
		var isUrl = true;
		if (url.startsWith("http://") || url.startsWith("https://")){
			return isUrl;
		} else {
			isUrl = false;
			return isUrl;
		}
	}; // End of urlChk Function
	
	//Function to title-case a string (split into words, uppercase first letter of each word)
	var titleCase = function(stringToCase){
		seperator = " ";
		var arrayOfStrings = stringToCase.split(seperator);
		
		for (var i = 0; i < arrayOfStrings.length; i++) {
			arrayOfStrings[i] = arrayOfStrings[i].substr(0,1).toUpperCase() +
				(arrayOfStrings[i].length > 1 ? arrayOfStrings[i].substr(1).toLowerCase() 
				: "")
		}
		return arrayOfStrings.join(" ");
	}; // End of titleCase Function
	
	//Function to replace seperators within a string with other seperators
	var changeSep = function(givenString, initSep, newSep){
		var newStr = givenString.replace(initSep, newSep, "gi");
		return newStr;
	}; //End of changeSep Function
	
	return {
		"phnNumChk" : phnNumChk,
		"emailChk" : emailChk,
		"urlChk" : urlChk,
		"titleCase" : titleCase,
		"changeSep" : changeSep
	}; //End of return
}; //End of String Functions

////////////////////
//Number Functions//
////////////////////

var numLib = function (){

	//Function to format a number to a specified number of decimal places
	var decimalPlace = function(num, decPla){
		var newNum = Number(num.toFixed(decPla));
		return newNum;
	}; // End of decimalPlace Function
	
	//Function to test if a given number is within a certain percentage above or
	//below second number
	var compNums = function (num1, num2, percentage){
		var per = percentage/100;
		var perOfNum2 = num2 * per;
		
		if (num1 < num2 && num1 <= perOfNum2){
			return true;
		} else if (num1 > num2 && num1 <= perOfNum2){
			return true;
		} else {
			return false;
		};
		
	}; //End of compNums Function
	
	//Function to find number of hours or days difference between two dates.
	var timeBtwDates = function (date1, date2, format){   // date format(yyyy,mm,dd)
		var day = 24*60*60*1000;
		var d1 = new Date(date1);
		var d2 = new Date(date2);
		var calcTime = Math.round(Math.abs((d1.getTime() - d2.getTime())/
			(day)));
		
		if (format === "days"){
			return calcTime;
		} else if (format === "hours") {
			hours = calcTime * 24;
			return hours;
		} else {
			console.log("Wrong format.");
		}
	}; //End of timeBtwDates Function
	
	//Function to return number value of a string.
	var numFromStr = function(num){
		return Number(num);
	};
	
	return {
		"decimalPlace" : decimalPlace,
		"compNums" : compNums,
		"timeBtwDates" : timeBtwDates,
		"numFromStr" : numFromStr
	}; //End return
}; //End Num Library

/////////////////////
// Array Functions //
/////////////////////

var arrayLib = function () {
	
	//Function to find smallest value in array that is greater than given number added to array.
	var smallVal = function(array, num) {
		var smallest = 0;
		array.sort(function(a,b){return a-b;});
		
		if (num > array[0] && num < array[array.length-1]) {
			array.push(num);
			array.sort(function(a,b){return a-b;});
			smallest = array[array.indexOf(num) + 1];
			return smallest;
		} else {
			return null;
			console.log("Out of range.");
		}; //End of if/else
	}; // End of smallVal Function
	

	//Function to find total value of all numbers in an array.
	var sumNums = function(array){
		var sum = 0;
		for (var i = 0; i < array.length; i++){
			if (array[i] * 1 === array[i]){
				sum += array[i];
			};// End of if
		};//End of for
		return sum;
	}; //End of sumNums
	
	//Function to sort an array of objects by given key value
	var sortArrayByKey = function(array,key){
		sortedArray = array;
		sortedArray.sort(function(a,b){
			return a[key] - b[key];
		});
		return sortedArray;
	}; //End of sortArrayByKey Function 
	
	return {
		"smallVal" : smallVal,
		"sumNums" : sumNums,
		"sortArrayByKey" : sortArrayByKey
	}; //End return 
			
}; //End of Array Library

/////////////
//Main Code//
/////////////

//Testing String Function Library
var stringLibrary = strLib();
console.log("Beginning string function tests.");
console.log(stringLibrary.phnNumChk("501-882-3810"));        //Project 2: Technical/Returns
console.log(stringLibrary.emailChk("dljones79@gmail.com"));
console.log(stringLibrary.urlChk("http://www.epikfoto.com"));
console.log(stringLibrary.titleCase("This is the string I want to manipulate."));
console.log(stringLibrary.changeSep("a,b,c,d", ",", "/"));
console.log("End of string function tests.");
//End of string function tests.

//Testing Number Function Library
var numberLib = numLib();
console.log("Beginning \"Number Function\" tests.");		//Project 1: String with escapes
console.log(numberLib.decimalPlace(7.124312, 2));
console.log(numberLib.compNums(25, 12, 15));
console.log(numberLib.timeBtwDates("2012,1,20","2013,4,1","days"));
console.log(numberLib.numFromStr("2145"));
console.log("End of number function tests.");
//End of number function tests.

//Testing Array Function Library
var arrLib = arrayLib();
var array1 = [{a:2},{a:1},{a:4},{a:3}];
console.log("Beginning array function tests.");
console.log(arrLib.smallVal([12,34,13,45,17,20,7,10],22));
console.log(arrLib.sumNums([14,10,"a",17,1,"114"]));
console.log(arrLib.sortArrayByKey(array1,"a"));
console.log("End of array function tests.");
//End of array function tests.

//Project 1: Indentation and line spacing (Techincal/Syntax)

