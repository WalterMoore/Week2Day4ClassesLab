### Instructions

Inheritance is the means in which javascript allows developers to give an object the same properties of another without excessive code duplication. Javascript does this by delegating failed look ups of an object up the [prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

There are multiple patterns, including: functional, prototypal and pseudoclassical.

Functional:
		~~~~~~
		var Person = function(name){
			var obj = {name: name};
			obj.greet = function(){
				return 'Hi, I am ' + obj.name + '.';
			};
			return obj;
		};

		var bob = Person('bob');
		bob.greet(); // 'Hi, I am bob.'

		(bob instanceof Person) //false

		~~~~~~

Prototypal:
		~~~~~~
		var Person = function(name){
			var obj = Object.create(Person.prototype);
			obj.name = name;
			return obj;
		};

		Person.prototype.greet = function(){
			return 'Hi, I am ' + this.name;
		}

		var bob = Person('bob');
		bob.greet()//'Hi, I am bob.'
		(bob instanceof Person) //true
		~~~~~~

Pseudoclassical:
		~~~~~~
		var Person = function(name){
			this.name = name;
		};

		Person.prototype.greet = function(){
			return 'Hi, I am ' + this.name;
		}
		//Uses the keyword new to instantiate an object
		var bob = new Person('bob');
		bob.greet()//'Hi, I am bob.'
		(bob instanceof Person) //true
		~~~~~~


### Further Reading
May be handy to create sub classes of Vehicle[fn.call](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)

### Basic Req's
Create a mini motor vehicle game using pseudo-classical pattern.

There should be 5 vehicle types:

Vehicle
Cars
Cop Car
Tank
Motorcycles

Use jquery to add animation and interact with the vehicles. The vehicles should have unique colors and and be displayed as spans on the page. The vehicles should be initially placed at random on the screen.

* Vehicle:
		-should be the super class all the other vehicles inherit from.
		-should have the shared methods move, damage and totaled.
			move - should move the car around the page
			damage - points a vehicle has accrues if it collides with another vehicle. Each vehicle can only get a certain amount of damage points before totaled
			remove - If totaled the should be removed from the dom

* Cars:
		-should be a sub class of vehicle with all shared properties
		-considered totaled once has 2 damage points
		-only moves horizontally across the browser
		-has a reverse property to move backwards

* Cop Car:
		-should be a sub class of vehicle with all shared properties
		-considered totaled once has 3 damage points
		-only moves vertically across the browser
		-has a siren property which allows vehicle to blink at a set interval

* Motorcycles:
		-should be a sub class of vehicle with all shared properties
		-considered totaled after hit once (one damage point)
		-move diagonally
		-has a speed property which moves twice as fast

* Tank:
		-should be a sub class of vehicle with all shared properties
		-considered totaled once has 10 damage points
		-has a slow property which moves at half the speed




