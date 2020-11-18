// push/pop - добавить либо удалить элемент с конца  
// unshift/shifts - добавить либо удалить элемент с начала
// indexOf - определить индекс элемента в массиве
// slice - срез массива

var names = ["John", "Jane", "Jack", "Jim"];
console.log(names);

var x = names.push("Jeen");
console.log(names);

var y = names.pop("Jeen");
console.log(names);
console.log(y);

x = names.unshift("Irene");
console.log(names);
console.log(x);

y = names.shift();
console.log(names);
console.log(y);

var z = names.indexOf("Jeen");
console.log(z);

var toyota = ["Camry", 2010, "sedan", "black", true];
var isSedan = toyota.indexOf("hatchback") === -1 ? //if
console.log("Type is not sedan.") : //else
console.log("Type is sedan");


var cars = ["Honda", "KIA", "Peugeot", "Mercedes", "Opel", "Toyota"];
var germanGars = cars.slice(3, 5); 
console.log(germanGars); // Mercedes, Opel
console.log(cars);