//alert("JavaScript works!");

//David Jones
//SDI 1303
//Project 4
//Code Library

// Function to check whether string is a phone number or not.
var phnNumChk = function(phoneNumber){
	var isPhnNum = true;
	var numChk = isNaN(phoneNumber[0,1,2,4,5,6,8,9,10,11]);
	
	if (phoneNumber.length === 12 && phoneNumber[3] === "-" && 
		phoneNumber[7] === "-" && numChk === false) {
			return isPhnNum;									//Project 2: Boolean Output
		} else {
			isPhnNum = false;
			return isPhnNum;
		}
}; //End of phnNumChk


//Function to check whether string is an e-mail or not.
var emailChk = function(emailAddress){
	var isEmail = true;
	if (emailAddress.contains("@" && emailAddress.endsWith(".com"))){
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
			(arrayOfStrings[i].length > 1 ? arrayOfStrings[i].substr(1).toLowerCase() : "")
	}
	return arrayOfStrings.join(" ");
}; // End of titleCase Function

//Function to replace seperators within a string with other seperators

var changeSep = function(givenString, initSep, newSep){
	var newStr = givenString.replace(initSep, newSep, "gi");
	return newStr;
};

var test = changeSep("a/b/c", "/", ",");
console.log(test);
