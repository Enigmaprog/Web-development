var age = prompt("Enter your age?");
var height = prompt("Enter your height in meters?");
var weight = prompt("Enter your weight in kilograms?");

var bodyWeightIndex = weight / (height * height);
var groupNumber;

if(age >= 18 && age <= 25){
	groupNumber = 1;
} else if (age >= 25 && age <= 46){
	groupNumber = 2;
} else {
	groupNumber = 3;
}

if(groupNumber === 1 && bodyWeightIndex < 17.5){
	alert("You are underweight, hazardous to health")
} else if(groupNumber === 1 && bodyWeightIndex >= 17.5 && bodyWeightIndex < 19.5){
	alert("Your weight is slightly reduced, not dangerous for your health");	
} else if(groupNumber === 1 && bodyWeightIndex >= 19.5 && bodyWeightIndex < 23){
	alert("Your weight is normal");
} else if(groupNumber === 1 && bodyWeightIndex >= 23 && bodyWeightIndex < 27.5){
	alert("Your weight is overweight");
} else if(groupNumber === 1 && bodyWeightIndex >= 27.5 && bodyWeightIndex < 30){
	alert("Obesity 1 degree");
} else if(groupNumber === 1 && bodyWeightIndex >= 30 && bodyWeightIndex < 35){
	alert("Obesity 2 degree");
} else if(groupNumber === 1 && bodyWeightIndex >= 35 && bodyWeightIndex < 40){
	alert("Obesity 3 degree");
} else if(groupNumber === 1 && bodyWeightIndex >= 40){
	alert("Obesity 4 degree");
} else if(groupNumber === 2 && bodyWeightIndex < 18){
	alert("You are underweight, hazardous to health")
} else if(groupNumber === 2 && bodyWeightIndex >= 18 && bodyWeightIndex < 20){
	alert("Your weight is slightly reduced, not dangerous for your health");	
} else if(groupNumber === 2 && bodyWeightIndex >= 20 && bodyWeightIndex < 26){
	alert("Your weight is normal");
} else if(groupNumber === 2 && bodyWeightIndex >= 26 && bodyWeightIndex < 28){
	alert("Your weight is overweight");
} else if(groupNumber === 2 && bodyWeightIndex >= 28 && bodyWeightIndex < 31){
	alert("Obesity 1 degree");
} else if(groupNumber === 2 && bodyWeightIndex >= 31 && bodyWeightIndex < 36){
	alert("Obesity 2 degree");
} else if(groupNumber === 2 && bodyWeightIndex >= 36 && bodyWeightIndex < 41){
	alert("Obesity 3 degree");
} else if(groupNumber === 2 && bodyWeightIndex >= 41){
	alert("Obesity 4 degree");
} else if(groupNumber === 3){
	alert("No data available for your age");
}

// if (a >= 10){
// 	console.log(true);
// } else if (b < 10){
// 	console.log(false);
// }