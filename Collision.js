document.addEventListener("DOMContentLoaded", createButton);

function createButton() {
	var myButton = document.createElement('button');
	var myButtonText = document.createTextNode('Click Me');						
	myButton.appendChild(myButtonText);
	document.body.appendChild(myButton);
	myButton.addEventListener("click",createVehicle);
}

function createVehicle() {
	var myVehicle = document.createElement('div');
	myVehicle.className = 'car';
	
	//var car = new Car();
	//car.div = myVehicle;
	myVehicle.style.top = Math.floor(Math.random() * 400 + 30);
	myVehicle.style.left = Math.floor(Math.random() * 520 + 30);
	//myVehicle.addEventListener("click",changeColor);
	//function changeColor() {
  		function c() {
  			return Math.floor(Math.random()* 256).toString(16);
  		}
	myVehicle.style.backgroundColor = "#"+c()+c()+c();
		/*}
		myVehicle.style.height = '99px';
		myVehicle.style.width = '99px';
		myVehicle.style.backgroundColor = 'black';
		myVehicle.style.margin = '5px';
		myVehicle.style.cssFloat = 'left';
		myVehicle.style.fontSize = '75px';
		myVehicle.style.fontWeight = 'bold';
		myVehicle.style.textAlign = 'center';
		myVehicle.style.paddingTop = '10px';

		document.body.appendChild(p);*/
		document.body.appendChild(myVehicle);
				
		/*mySquare.id = document.getElementsByClassName('square').length;
        mySquare.addEventListener("mouseover", numberAppear);
        mySquare.addEventListener("mouseout", numberDisappear);
        mySquare.addEventListener("dblclick", removeElement);*/
	}




function inherit(proto) {
  function F() {}
  F.prototype = proto
  return new F
}
		


function Vehicle(){
	this.damageTolerance = 0;
	this.damageInflicted = 1;
	this.rate = 4;
	this.rateModifier = 1;
	//this.heading = horizontal()
	this.heading = "horizontal";
}

Vehicle.prototype.move = function() {
	var rate = 4
	direction = function(){
		//some manipulation of xy coordinates
	}
}

Vehicle.prototype.damage = function(){
	var dam = 2;
}
//Vehicle.prototype.totaled = function(){}
Vehicle.prototype.remove = function(){}
	

//using inherit function
//dont need to define car function
//because inherit retuns a function
var Car = inherit(Vehicle.prototype);
Car.damageTolerance = 2;

//not using inherit function
//need this function in order to work
function Copcar(){}
//coping prototype from vehicle to copcar
Copcar.prototype = Vehicle.prototype;
Copcar.damageTolerance = 3;
Copcar.heading = "vertical";


function Tank(){}
Tank.prototype = Vehicle.prototype;
Tank.damageTolerance = 10;
Tank.rateModifier = .5;
Tank.heading = "diagonalTopLeftToBottomRight";


function Moto(){}
Moto.prototype = Vehicle.prototype;
Moto.damageTolerance = 1;
Moto.rateModifier = 2;
Moto.heading = "diagonalTopRightToBottomLeft";


function Possum(){}
Possum.prototype = Vehicle.prototype;
Possum.damageTolerance = 1;
Possum.rateModifier = .5;
Possum.damageInflicted = 0;
Possum.heading = "confused";


