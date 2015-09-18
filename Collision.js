document.addEventListener("DOMContentLoaded", createButton);

function createButton() {
	var myButton = document.createElement('button');
	var myButtonText = document.createTextNode('Click Me');						
	myButton.appendChild(myButtonText);
	document.body.appendChild(myButton);
	myButton.addEventListener("click",createVehicle);
}

function createVehicle() {
	//for(i = 0;i < 3000; i++){//this is a test to see what a full screen looks like.
	var myVehicle = document.createElement('div');
	document.body.appendChild(myVehicle);
	myVehicle.className = 'vehicle';
	
	//this is where any vehicle appears:
	myVehicle.style.top = Math.floor(Math.random() * 400 + 30);
	myVehicle.style.left = Math.floor(Math.random() * 520 + 30);
	//myVehicle.addEventListener("click",changeColor);
	//function changeColor() {
	
	var pickType = Math.floor(Math.random()*100);
	if(pickType <= 70){
	
	//this is to create cars with random colors:
	//var car = new Car();
	//car.div = myVehicle;
		
  		function c() {
  			return Math.floor(Math.random()* 256).toString(16);
  		}
		  var car = new Car();
		  car.div = myVehicle;
		car.div.style.backgroundColor = "#"+"FF"+c()+c();
	}else if(pickType >70 && pickType <= 80){
		//create a cop car
		var copCar = new Copcar();
		copCar.div = myVehicle;
		copCar.div.style.backgroundColor = 'blue';
		copCar.div.style.height = 18;
		copCar.div.style.width = 7;
	}else if(pickType >80 && pickType <= 85){
		//create a tank
		var tank = new Tank();
		tank.div = myVehicle;
		tank.div.style.backgroundColor = '#A0D737';
		tank.div.style.height = 25;
		tank.div.style.width = 12;
	}else if(pickType >85 && pickType <= 92){
		//create a motorcycle
		var moto = new Moto();
		moto.div = myVehicle;
		moto.div.style.backgroundColor = 'yellow';
		moto.div.style.height = 10;
		moto.div.style.width = 3;
	}else{
		//create a possum
		var possum = new Possum();
		possum.div = myVehicle;
		possum.div.style.backgroundColor = '#eeeeee';
		possum.div.style.height = 4;
		possum.div.style.width = 4;
	}	
	//}
}




function inherit(proto) {
  function F() {}
  F.prototype = proto;
  return new F;
}
		


function Vehicle(){
	this.damageTolerance = 0;
	this.damageInflicted = 1;
	this.rate = 4;
	this.rateModifier = 1;
	//this.heading = horizontal()
	this.heading = "horizontal";
	//I want to add 4 to 
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
function Car(){}
Car.prototype = inherit(Vehicle.prototype);
Car.damageTolerance = 2;
$("car.div").animate({left: '250px'});
//not using inherit function
//need this function in order to work
function Copcar(){}
//coping prototype from vehicle to copcar
Copcar.prototype = Object.create(Vehicle.prototype);
Copcar.damageTolerance = 3;
Copcar.heading = "vertical";


function Tank(){}
Tank.prototype = Object.create(Vehicle.prototype);
Tank.damageTolerance = 10;
Tank.rateModifier = .5;
Tank.heading = "diagonalTopLeftToBottomRight";


function Moto(){}
Moto.prototype = Object.create(Vehicle.prototype);
Moto.damageTolerance = 1;
Moto.rateModifier = 2;
Moto.heading = "diagonalTopRightToBottomLeft";


function Possum(){}
Possum.prototype = Object.create(Vehicle.prototype);
Possum.damageTolerance = 1;
Possum.rateModifier = .5;
Possum.damageInflicted = 0;
Possum.heading = "confused";


