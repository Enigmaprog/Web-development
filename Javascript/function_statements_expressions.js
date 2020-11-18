// method statements
function animalVoice(animal, animalName) {
	switch(animal) {
		case "dog":
			return animalName + " barks.";
		case "cat":
			return animalName + " meows.";
		case "pig":
			return animalName + " grunts.";
		default:
			return animalName + " makes some sounds";
	}
}

console.log(animalVoice("tiger", "Richard"));

// method expressions
var animalVoice = function(animal, animalName) {
	switch(animal) {
		case "dog":
			return animalName + " barks.";
		case "cat":
			return animalName + " meows.";
		case "pig":
			return animalName + " grunts.";
		default:
			return animalName + " makes some sounds";
	}
}

console.log(animalVoice("cat", "Richard")); 