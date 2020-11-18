var cars = [
	{
		carProduces: "fiat",
		carModel: "doblo",
		color: "white",
		year: 2018,
		isSelled: false
	},	
	{
		carProduces: "land",
		carModel: "toyota",
		color: "green",
		year: 2015,
		isSelled: true
	},
	{
		carProduces: "g-class",
		carModel: "beenz",
		color: "black",
		year: 2010,
		isSelled: false
	},
	{
		carProduces: "retro",
		carModel: "moscow",
		color: "yellow",
		year: 2006,
		isSelled: true
	},
	{
		carProduces: "ford-2",
		carModel: "ford",
		color: "orange",
		year: 2020,
		isSelled: false
	}
]

// console.log(cars);

for(var i = 0; i < cars.lenght; i++){
	if(cars[i].isSelled === false){
		console.log(cars[i]);
	}
}

cars.forEach(function(car) {
	if(car.isSelled === false) {
		console.log(car);
	}
})