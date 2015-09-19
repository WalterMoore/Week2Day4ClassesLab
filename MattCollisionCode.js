$(document).ready(function() {
   var width = $(document).width() - 100;
   var height = $(document).height() - 100;
   
   $('#btnAddCopCar').click(function() {
       var v = new CopCar();
       v.move();
   });
   $('#btnAddMotorcycle').click(function() {
       var v = new Vehicle('Vehicle');
       v.move();
   });
   $('#btnAddCar').click(function() {
       var c = new Car();
       c.move();
   });
   
   
   Vehicle.prototype.moveRight = function() {
       $(this.div).animate({
           left: width}, 
           { duration: this.speed, queue: false,
           complete: this.moveLeft.bind(this)}
       );
   };
   Vehicle.prototype.moveLeft = function() {
       
       $(this.div).animate({
            left: 0
           }, 
           { 
               duration: this.speed, 
               queue: false,
               complete: this.moveRight.bind(this)
           }
       );
   }
   Vehicle.prototype.moveDown = function() {
       
       $(this.div).animate({
           top: height}, 
           { duration: this.speed, queue: false, 
           complete: this.moveUp.bind(this)}
       );
   }
   Vehicle.prototype.moveUp = function() {
       
       $(this.div).animate({
           top: 0}, { 
               duration: this.speed, 
               queue: false, 
               complete: this.moveDown.bind(this)
           }
       );
   }
   Vehicle.prototype.move = function (direction) {
       this.moveRight();
       this.moveDown();
   }
       
   Vehicle.prototype.remove = function () {

   }
   Vehicle.prototype.createVehicle = function(vehicleType) {
       this.div = $('<div class="' + vehicleType + '"></div>');
       $(document.body).append(this.div);
   }
    function Vehicle(vehicleType){
       this.createVehicle('Vehicle');
       this.tolerance = 1;
       this.speed = 2000;
   }
   function Car() {
       this.createVehicle('Car');
       this.tolerance = 2;
       this.speed = 1000;
       this.move = function() {
           this.moveRight();
       }
   }
   Car.prototype = Vehicle.prototype;
   
   function CopCar() {
       this.createVehicle('CopCar');
       this.tolerance = 3;
       this.speed = 500;
       this.move = function() {
           this.moveDown();
       }
   }
   
   CopCar.prototype = Vehicle.prototype;
   
   function Motorcycle() {
       
   }
});