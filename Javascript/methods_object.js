// var carSeller1 = {
// 	firstName: "Jack",
// 	lastName: "White",
// 	regYear: 2018,
// 	hasDiscount: true,
// 	discount: 0,
// 	discountCalculation: function() {
// 		var discount;
// 		var numberOfYears = 2019 - this.regYear;

// 		if(numberOfYears <= 2) {
// 			discount = 0;
// 		} else if ((numberOfYears > 2) && (numberOfYears <= 5)) {
// 			discount = 20;
// 		} else if (numberOfYears > 5) {
// 			discount = 30;
// 		}
// 		return discount;
// 	}
// }

// carSeller1.discount = carSeller1.discountCalculation();

// console.log(carSeller1);


var carSeller1 = {
	firstName: "Jack",
	lastName: "White",
	regYear: 2020,
	hasDiscount: true,
	discount: 0,
	calculateDiscount: function() {
		var discount;
		var numberOfYears = 2019 - this.regYear;

		if(numberOfYears <= 2) {
			discount = 0;
		} else if ((numberOfYears > 2) && (numberOfYears <= 5)) {
			discount = 20;
		} else if (numberOfYears > 5) {
			discount = 30;
		}
		this.discount = discount;
	}
}

carSeller1.calculateDiscount();

console.log(carSeller1);