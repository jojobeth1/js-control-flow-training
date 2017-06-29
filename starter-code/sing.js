console.log("sing.js loaded");
//var numBottles = prompt("How many bottles of beer on the wall?");

//create a variable for bottles
var bottles = "bottles";

//while the numbers of bottles is greater than 0...
while (numBottles > 0){
  // display numBottles bottles of beer on the wall,...
	console.log(numBottles + " " + bottles + " of beer on the wall,");
	console.log(numBottles + " " +  bottles + " of beer");
	console.log("Take one down and pass it around,");
	numBottles = numBottles - 1;

  //if numBottles is = 1, bottles becomes bottle
  if (numBottles === 1){
		bottles = "bottle"
	}
  // if numBottles = 0...
	if (numBottles === 0){
    //print in console No more bottles of beer on the wall..
		console.log("No more bottles of beer on the wall!");
  //Otherwise console log will say numBottles bottles of beer on the wall
  } else {
		console.log(numBottles + " " + bottles + " of beer on the wall!");
	}
}
