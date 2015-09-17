		/*var Person = function(name){
			this.name = name;
		};

		Person.prototype.greet = function(){
			return 'Hi, I am ' + this.name;
		}
		//Uses the keyword new to instantiate an object
		var bob = new Person('bob');
		bob.greet()//'Hi, I am bob.'
		(bob instanceof Person) //true*/
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
	

function Car(){}

Car.prototype = inherit(Vehicle.prototype);
Car.damageTolerance = 2;


function Copcar(){}

Copcar.prototype = inherit(Vehicle.prototype);
Copcar.damageTolerance = 3;
Copcar.heading = "vertical";


function Tank(){}

Tank.prototype = inherit(Vehicle.prototype);
Tank.damageTolerance = 10;
Tank.rateModifier = .5;
Tank.heading = "diagonalTopLefttoBottomRight";


function Moto(){}

Moto.prototype = inherit(Vehicle.prototype);
Moto.damageTolerance = 1;
Moto.rateModifier = 2;

