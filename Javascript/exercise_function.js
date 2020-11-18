// function isNumberOdd(x) {
// 	if (x%2 === 0) {
// 		return console.log(false);
// 	} else {
// 		return console.log(true);
// 	} 
// }

// isNumberOdd(11);
// isNumberOdd(8);
// isNumberOdd(0);
// isNumberOdd(23);

// function factorial(x) {
// 	var number = 1;
// 	for (i = 1; i <=x ; i++){
// 		number *= i;
// 	}
// 	return console.log(number);
// }

// factorial(5);

function changeSpaceToUnderscore(text) {
	var resultText = text.replace(/ /g, "_");
	return resultText;
}

console.log(changeSpaceToUnderscore("create function"));