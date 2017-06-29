console.log("login.js loaded");

//create username and password

userLogin = {
    username: "Joanne Cabling",
    password: "turtle"
};
var passwordInput;

var loggedIn = false;

//while login is false...
while (!loggedIn){
	passwordInput = prompt("Enter password for user " + userLogin.userName + ".")
	if (passwordInput === userLogin.password){
		console.log("Passwords match!");
    loggedIn = true;
	} else {
		console.log("Passwords do not match. Try Again!");
	}
}
