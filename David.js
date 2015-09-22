function inheritPrototype(proto) {
    function F() {}
    F.prototype = proto;
    return new F;
}

var Vehicle = function(damageTolerance, movementDirection, speedMultiplier) {
    this.damagePoints = 0;
    this.damageTolerance = damageTolerance;
    this.movementDirection = movementDirection;
    this.speedMultiplier = speedMultiplier;
};

Vehicle.prototype.vehicleElement = null;

Vehicle.prototype.move = function() {
    // move the vehicle around
    var topstr = this.vehicleElement.style.top;
    var top = parseInt(topstr.substr(0, topstr.length - 2));
    var leftstr = this.vehicleElement.style.left;
    var left = parseInt(leftstr.substr(0, leftstr.length - 2));
    var incrementFactor = 5;
    switch(this.movementDirection) {
        case 'horizontal':
            left += incrementFactor * this.speedMultiplier;
            break;
        case 'vertical':
            top += incrementFactor * this.speedMultiplier;
            break;
        case 'diagonal':
            left += incrementFactor * this.speedMultiplier;
            top += incrementFactor * this.speedMultiplier;
            break;
    }
    if (top > 600) { // Gone off bottom of screen. Jump to just over top edge.
        top = -50;
    }
    if (left > 800) { // Gone off right edge of screen. Jump to just over left edge.
        left = -50;
    }
    if (top < -50) { // Gone off top edge of screen (reverse). Jump to just under bottom edge. 
        top = 600;
    }
    if (left < -50) { // Gone off left edge of screen (reverse). Jump to just over right edge.
        left = 800;
    }
    this.vehicleElement.style.top = top;
    this.vehicleElement.style.left = left;
}

Vehicle.prototype.damage = function() {
    console.log('damage has occurred!');
    this.damagePoints++;
    if (this.damagePoints >= this.damageTolerance) {
        this.remove();
    }
}

Vehicle.prototype.remove = function() {
    document.getElementById('crash_derby').removeChild(this.vehicleElement);
    var target = vehicles.indexOf(this);
    if (target !== -1) {
        vehicles.splice(target, 1);
    }
}

Vehicle.prototype.add = function() {
    this.vehicleElement = document.createElement('div');
    this.vehicleElement.style.top = Math.floor(Math.random() * 600);
    this.vehicleElement.style.left = Math.floor(Math.random() * 800);
    document.getElementById('crash_derby').appendChild(this.vehicleElement);
}

Vehicle.prototype.hasCollidedWith = function(anotherVehicle) {
    var thisDiv = this.vehicleElement;
    var anotherDiv = anotherVehicle.vehicleElement;
    var thisTop = parseInt(thisDiv.style.top.substr(0,thisDiv.style.top.length - 2));
    var thisLeft = parseInt(thisDiv.style.left.substr(0,thisDiv.style.left.length - 2));
    var anotherTop = parseInt(anotherDiv.style.top.substr(0,anotherDiv.style.top.length - 2));
    var anotherLeft = parseInt(anotherDiv.style.left.substr(0,anotherDiv.style.left.length - 2));
    
    // IF this vehicle is not in the exact position as another vehicle (which means most likely itself)
    // AND it is NOT the case that one of the tell-tale signs of non-intersection is true
    if (
            (thisTop !== anotherTop && thisLeft !== anotherLeft) &&
            !(
                ((thisTop + thisDiv.offsetHeight) < anotherTop) ||
                (thisTop > (anotherTop + anotherDiv.offsetHeight)) ||
                ((thisLeft + thisDiv.offsetWidth) < anotherLeft) ||
                (thisLeft > (anotherLeft + anotherDiv.offsetWidth))
            )
        )
        {
            return true;
        } else {
            return false;
        }
}

var Car = function() {
    // Call the constructor for the superclass Vehicle
    // Creates a new base Vehicle with a damage tolerance of 2, horizontal movement, and speed mult of 1
    Vehicle.call(this, 2, 'horizontal', 1);
}

// Set Car to inherit from Vehicle
// inheritPrototype is a function defined at the top of this file
// NOTE: functionally equivalent to Car.prototype = Object.create(Vehicle.prototype);
Car.prototype = inheritPrototype(Vehicle.prototype);

Car.prototype.reverse = function() {
    this.speedMultiplier *= -1;
}

var CopCar = function() {
    // Call the superclass Car (which calls its superclass Vehicle)
    // Override the default Car values to damage tolerance 3 and vertical movement
    Car.call(this);
    this.damageTolerance = 3;
    this.movementDirection = 'vertical';
}

// Set CopCar to inherit from Car
// inheritPrototype is a function defined at the top of this file
// NOTE: functionally equivalent to CopCar.prototype = Object.create(Car.prototype);
CopCar.prototype = inheritPrototype(Car.prototype);

CopCar.prototype.startSiren = function() {
    this.vehicleElement.classList.add('blinking');
}

CopCar.prototype.stopSiren = function() {
    this.vehicleElement.classList.remove('blinking');
}

var Motorcycle = function() {
    // Call superclass Vehicle
    // Sets damage tolerance to 1, diagonal movement, and speed multiplier of 2
    Vehicle.call(this, 1, 'diagonal', 2);
}

// Set Motorcycle to inherit from Vehicle
// inheritPrototype is a function defined at the top of this file
// NOTE: functionally equivalent to Motorcycle.prototype = Object.create(Vehicle.prototype);
Motorcycle.prototype = inheritPrototype(Vehicle.prototype);

var Tank = function() {
    // Call superclass Vehicle
    // Sets damage tolerance to 10, diagonal movement, and speed multiplier of 0.5
    Vehicle.call(this, 10, 'diagonal', 0.5);
}

// Set Tank to inherit from Vehicle
// inheritPrototype is a function defined at the top of this file
// NOTE: functionally equivalent to Tank.prototype = Object.create(Vehicle.prototype);
Tank.prototype = inheritPrototype(Vehicle.prototype);

var vehicles = [];
var sirensBlinking = false;

function createButtonClicked(type) {
    var vehicle;
    var className;
    switch (type) {
        case 'car':
            vehicle = new Car();
            className = 'vehicle car';
            break;
        case 'cop':
            vehicle = new CopCar();
            className = 'vehicle cop';
            break;
        case 'moto':
            vehicle = new Motorcycle();
            className = 'vehicle motorcycle';
            break;
        case 'tank':
            vehicle = new Tank();
            className = 'vehicle tank';
            break;
    }
    vehicle.add();
    vehicle.vehicleElement.className = className;
    if (sirensBlinking && vehicle instanceof CopCar) {
        vehicle.vehicleElement.classList.add('blinking');
    }
    vehicles.push(vehicle);
}

function shiftGears() {
    for (var l = 0; l < vehicles.length; l++) {
        var vehicle = vehicles[l];
        if (vehicle instanceof Car) {
            vehicle.reverse();
        }
    }
}

function toggleSirens() {
    for (var i = 0; i < vehicles.length; i++) {
        var vehicle = vehicles[i];
        if (vehicle instanceof CopCar) {
            if (sirensBlinking) {
                vehicle.stopSiren();
            } else {
                vehicle.startSiren();
            }
        }
    }
    sirensBlinking = !sirensBlinking;
}

function stepAnimation() {
    for (var i = 0; i < vehicles.length; i++) {
        var vehicle = vehicles[i];
        vehicle.move();
    }
}

function checkCollisions() {
    for (var k = 0; k < vehicles.length; k++) {
        var vehicle = vehicles[k];
        // Check if this current vehicle has collided with any other vehicle in the game
        for (var m = 0; m < vehicles.length; m++) {
            var anotherVehicle = vehicles[m];
            if (vehicle.hasCollidedWith(anotherVehicle)) {
                vehicle.damage();
                anotherVehicle.damage();
            }
        }
    }
}

setInterval(stepAnimation, 125);
setInterval(checkCollisions, 2000);