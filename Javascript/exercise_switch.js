var name = prompt("Enter your name");
var password = prompt("Enter your password");

switch(name | password) {
	case "batbileg" | "7575":
		alert("you can edit site");
		break;
	case "admin" | "1111":
		alert("You can edit site");
		break;
	default :
		alert("your password and login are incorrect");
		break;
}