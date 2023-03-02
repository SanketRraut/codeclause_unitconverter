function convert() {
	var value = document.getElementById("value").value;
	var from = document.getElementById("from").value;
	var to = document.getElementById("to").value;
	
	if (from == "meter" && to == "centimeter") {
		var result = value * 100;
		document.getElementById("result").innerHTML = result + " centimeters";
	}
	
	else if (from == "meter" && to == "kilometer") {
		var result = value / 1000;
		document.getElementById("result").innerHTML = result + " kilometers";
	}
	
	else if (from == "centimeter" && to == "meter") {
		var result = value / 100;
		document.getElementById("result").innerHTML = result + " meters";
	}
	
	else if (from == "centimeter" && to == "kilometer") {
		var result = value / 100000;
		document.getElementById("result").innerHTML = result + " kilometers";
	}
	
	else if (from == "kilometer" && to == "meter") {
		var result = value * 1000;
		document.getElementById("result").innerHTML = result + " meters";
	}
	
	else if (from == "kilometer" && to == "centimeter") {
		var result = value * 100000;
		document.getElementById("result").innerHTML = result + " centimeters";
	}
}
