// document.getElementById();
// document.getElementsByClassName();
// document.getElementsByTagName();
// document.querySelector();
// document.querySelectorAll();

document.getElementById("header").innerHTML = "New Value";

var y = document.getElementsByClassName("firstThreeElements");
console.log(y);
console.log(y[1].innerHTML);

console.log(document.getElementsByTagName("li")[1].innerHTML);

console.log(document.getElementsByTagName("body")[0]);

console.log(document.getElementsByTagName("head")[0]);

console.log(document.querySelector(".anotherElements").innerHTML);

console.log(document.querySelectorAll("li")[1].innerHTML);

console.log(document.querySelectorAll("#header"));