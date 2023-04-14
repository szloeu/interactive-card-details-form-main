document.getElementById("input-id-cardholder-name").addEventListener("keyup", function(){
	var cardholdername = document.getElementById("input-id-cardholder-name").value;
	document.getElementById("p-id-cardholder-name").innerHTML= cardholdername;
})

var cardnumber_orig = "";
var cardnumber_enhanced = "";
const numbers = ["0","1","2","3","4","5","6","7","8","9"];
document.getElementById("input-id-card-number").addEventListener("keyup", function(event){

	if (event.key==="Backspace") {
		cardnumber_enhanced = cardnumber_enhanced.trim();
		cardnumber_enhanced = cardnumber_enhanced.slice(0,cardnumber_enhanced.length-1);
		cardnumber_orig = cardnumber_orig.slice(0,cardnumber_orig.length-1);
	}

	if (numbers.includes(event.key) && (cardnumber_orig.length < 16)) {
		
		cardnumber_orig += event.key;
		cardnumber_enhanced += event.key;

		if ((cardnumber_orig.length % 4)==0 && cardnumber_orig.length<16){
				cardnumber_enhanced += " ";
		}
		
	}

	document.getElementById("input-id-card-number").value = cardnumber_enhanced;
	document.getElementById("p-id-card-number").innerHTML = cardnumber_enhanced;

})

var month = "";
document.getElementById("input-id-exp-date-month").addEventListener("keyup", function(event){

	if (event.key==="Backspace") {
		month = month.slice(0,month.length-1);
	}

	if (numbers.includes(event.key) && month.length < 2) {
		month += event.key;
		document.getElementById("input-id-exp-date-month").value = month;
		document.getElementById("span-id-exp-date-month").innerHTML = month;
	}

	document.getElementById("input-id-exp-date-month").value = month;
	document.getElementById("span-id-exp-date-month").innerHTML = month;
})

var year = "";
document.getElementById("input-id-exp-date-year").addEventListener("keyup", function(event){
	
	if (event.key==="Backspace") {
		year = year.slice(0,year.length-1);
	}

	if (numbers.includes(event.key) && year.length < 2) {
		year += event.key;
		document.getElementById("input-id-exp-date-year").value = year;
		document.getElementById("span-id-exp-date-year").innerHTML = year;
	}

	document.getElementById("input-id-exp-date-year").value = year;
	document.getElementById("span-id-exp-date-year").innerHTML = year;
})

var cvc = "";
document.getElementById("input-id-cvc").addEventListener("keyup", function(event){

	if (event.key==="Backspace") {
		cvc = cvc.slice(0,cvc.length-1);
	}

	if (numbers.includes(event.key) && cvc.length < 3) {
		cvc += event.key;
		document.getElementById("input-id-cvc").value = cvc;
		document.getElementById("p-id-card-cvc").innerHTML = cvc;
	}

	document.getElementById("input-id-cvc").value = cvc;
	document.getElementById("p-id-card-cvc").innerHTML = cvc;
})

document.getElementById("div-id-confirm").addEventListener("click", function(){

	var card_details = true;
	
	if (document.getElementById("input-id-cardholder-name").value.length == 0) {
		document.getElementById("p-id-cardholder-name-wrong").style.display = "block";
		document.getElementById("input-id-cardholder-name").style.border = "2px solid hsl(0, 100%, 66%)";
		card_details = false;
	}

	if (document.getElementById("input-id-card-number").value.length < 19) {
		document.getElementById("p-id-card-number-wrong").style.display = "block";
		document.getElementById("input-id-card-number").style.border = "2px solid hsl(0, 100%, 66%)";
		card_details = false;
	}

	if (document.getElementById("input-id-exp-date-month").value.length < 2 ) {
		document.getElementById("p-id-exp-date-wrong").style.display = "block";
		document.getElementById("input-id-exp-date-month").style.border = "2px solid hsl(0, 100%, 66%)";
		card_details = false;
	}

	if (document.getElementById("input-id-exp-date-year").value.length < 2 ) {
		document.getElementById("p-id-exp-date-wrong").style.display = "block";
		document.getElementById("input-id-exp-date-year").style.border = "2px solid hsl(0, 100%, 66%)";
		card_details = false;
	}


	if (document.getElementById("input-id-cvc").value.length < 3 ) {
		document.getElementById("p-id-cvc-wrong").style.display = "block";
		document.getElementById("input-id-cvc").style.border = "2px solid hsl(0, 100%, 66%)";
		card_details = false;
	}

	if (card_details == true) {
		document.getElementById("div-id-thankyou").style.display = "flex";
		document.getElementById("div-id-card-data").style.display = "none";
	}

})

document.getElementById("input-id-cardholder-name").addEventListener("focus", function(){
	document.getElementById("p-id-cardholder-name-wrong").style.display = "none";
	document.getElementById("input-id-cardholder-name").style.border = "2px solid hsl(278, 68%, 11%)";
})

document.getElementById("input-id-card-number").addEventListener("focus", function(){
	document.getElementById("p-id-card-number-wrong").style.display = "none";
	document.getElementById("input-id-card-number").style.border = "2px solid hsl(278, 68%, 11%)";
})

document.getElementById("input-id-exp-date-month").addEventListener("focus", function(){
	document.getElementById("p-id-exp-date-wrong").style.display = "none";
	document.getElementById("input-id-exp-date-month").style.border = "2px solid hsl(278, 68%, 11%)";
})

document.getElementById("input-id-exp-date-year").addEventListener("focus", function(){
	document.getElementById("p-id-exp-date-wrong").style.display = "none";
	document.getElementById("input-id-exp-date-year").style.border = "2px solid hsl(278, 68%, 11%)";
})

document.getElementById("input-id-cvc").addEventListener("focus", function(){
	document.getElementById("p-id-cvc-wrong").style.display = "none";
	document.getElementById("input-id-cvc").style.border = "2px solid hsl(278, 68%, 11%)";
})

document.getElementById("input-id-cardholder-name").addEventListener("blur", function(){
	document.getElementById("input-id-cardholder-name").style.border = "1px solid hsl(270, 3%, 87%)";
})

document.getElementById("input-id-card-number").addEventListener("blur", function(){
	document.getElementById("input-id-card-number").style.border = "1px solid hsl(270, 3%, 87%)";
})

document.getElementById("input-id-exp-date-month").addEventListener("blur", function(){
	document.getElementById("input-id-exp-date-month").style.border = "1px solid hsl(270, 3%, 87%)";
})

document.getElementById("input-id-exp-date-year").addEventListener("blur", function(){
	document.getElementById("input-id-exp-date-year").style.border = "1px solid hsl(270, 3%, 87%)";
})

document.getElementById("input-id-cvc").addEventListener("blur", function(){
	document.getElementById("input-id-cvc").style.border = "1px solid hsl(270, 3%, 87%)";
})

document.getElementById("div-id-continue").addEventListener("click", function(){
	location.reload();
});