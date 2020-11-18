// var h1 = document.getElementById("header");

// console.log(h1.innerHMTL);

// h1.addEventListener("click", function() {
// 	this.style.background = "red";
// });

// // h1.addEventListener("click", function() {
// // 	this.style.color = "green";
// // });

// var liElements = document.querySelectorAll("li");

// console.log(liElements);

// for(var i = 0; i < liElements.lenght; i++) {
// 	liElements[i].addEventListener("click", function() {
// 		this.style.color = "green";
// 	});
// }

// var changeLiColor = function() {
// 		this.style.color = "green";
// 	};

// for(var i = 0; i < liElements.lenght; i++) {
// 	liElements[i].addEventListener("click", changeLiColor)
// }

var button = document.querySelector("button");

var isBackgroundApplied = false;

// button.addEventListener("click", function() {
// 	if(isBackgroundApplied === false){
// 		document.querySelector("body").style.background = "blue";
// 		isBackgroundApplied = true;
// 	} else {
// 		document.querySelector("body").style.background = "white";
// 		isBackgroundApplied = false;
// 	}
// });

button.addEventListener("click", function() {
	document.querySelector("body").classList.toggle("blue");
});