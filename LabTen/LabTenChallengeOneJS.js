function addition(input1, input2){
	var variable1 = Number(input1);
	var variable2 = Number(input2);
	var total=String(variable1+variable2);
	document.getElementById("output").innerHTML=total
}
function subtraction(input1, input2){
	var variable1 = Number(input1);
	var variable2 = Number(input2);
	var total=String(variable1-variable2);
	document.getElementById("output").innerHTML=total
}
function multiplication(input1, input2){
	var variable1 = Number(input1);
	var variable2 = Number(input2);
  var total=String(variable1*variable2);
	document.getElementById("output").innerHTML=total
}
function division(input1, input2){
	var variable1 = Number(input1);
	var variable2 = Number(input2);
	var total=String(variable1/variable2);
	document.getElementById("output").innerHTML=total
}
