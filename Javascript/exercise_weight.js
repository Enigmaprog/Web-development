var height = prompt("Введите свое имя?"); 
var weight = prompt("Введите свой вес?");

var body = weight / (height * height);
var bodyT = body > 28;

alert("У вас лишний вес: " + bodyT);