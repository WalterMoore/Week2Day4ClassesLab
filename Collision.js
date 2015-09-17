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

function vehicle(rate,direction,damage,totalled){
	this.rate = 4;
	this.direction = //horizontal
	this.damage = 2;
	this.totaled = /*all hits totalled*/;
}
 
var car = vehicle;

var copCar = new vehicle;
	copCar.direction = //vertical
	copCar.damage = 3;

var tank = new vehicle;
	tank.rate = 2;
	tank.direction = //diagonal from top left towards bottom right.
	tank.damage = 10;
	
var moto = new vehicle;
	moto.rate = 8
	moto.direction = //diagonal from top right towards bottom left.
	moto.damage = 1;