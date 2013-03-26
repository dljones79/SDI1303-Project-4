//alert("JavaScript works!");

//David Jones
//SDI 1303
//Project 4
//Code Library

// Function to check whether string is a phone number or not
var phnNumChk = function(phoneNumber){
	var isPhnNum = true;
	var numChk = isNaN(phoneNumber[0,1,2,4,5,6,8,9,10,11]);
	
	if (phoneNumber.length === 12 && phoneNumber[3] === "-" && 
		phoneNumber[7] === "-" && numChk === false) {
			return isPhnNum;
		} else {
			isPhnNum = false;
			return isPhnNum;
		}
}; //End of phnNumChk

var chkPhnNum = phnNumChk("501-882-3810");
console.log(chkPhnNum);
