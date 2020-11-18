var carToyota = {
	model: "Camry",
	year: 2010,
	carBody: "sedan",
	color: "black",
	hasAirbag: true 
};


var x = "hasAirbag";

console.log(carToyota["hasAirbag"]);
console.log(carToyota.hasAirbag);
console.log(carToyota.color);

carToyota.color = "red";
carToyota.year += 2
console.log(carToyota);

var carMazda = {}

carMazda.year = 2010;
carMazda.model = "crossover";
carMazda.carBody = "CX7";
carMazda.color = "blue";
carMazda.hasAirbag = false
carMazda.doorNumber = 4;

console.log(carMazda);

var carOpel = new Object();
carOpel.model = "hatchback";
carOpel.year = 2010;
carOpel.model = "crossover";
carOpel.carBody = "CX7";
carOpel.color = "blue";
carOpel.hasAirbag = false
carOpel.doorNumber = 4;

console.log(carOpel);