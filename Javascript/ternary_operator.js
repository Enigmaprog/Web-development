var userName = "Jack";
var userWeight = 105;

// if (userWeight > 90) {
// 	console.log(userName + " has redundant weight.");
// } else {
// 	console.log(userName + " has normal weight.");
// }

// userWeight > 90 ? console.log(userName + " has redundant weight.") : console.log(userName + " has normal weight");

var weightDescription;

weightDescription = userWeight > 90 ? "redundant" : "normal";

console.log(userName + " has " + weightDescription + " weight.");