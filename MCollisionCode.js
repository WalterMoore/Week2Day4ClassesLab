$(document).ready(function() {
   var width = $(document).width() - 100;
   var height = $(document).height() - 100;
   
   $('#btnAddCopCar').click(function() {
       var v = new CopCar();
       v.move();
   });
   $('#btnAddMotorcycle').click(function() {
       var v = new Motorcycle();
       v.move();
   });
   $('#btnAddCar').click(function() {
       var c = new Car();
       c.move();
   });
   $('#btnAddTank').click(function() {
       var v = new Tank();
       v.move();
   });
   $('#btnSurpriseMe').click(function() {
       var v = new Godzilla();
       v.move();   
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
   Vehicle.prototype.moveDiag1 = function (direction) {
       this.moveRight();
       this.moveDown();
   }
   
   Vehicle.prototype.moveDiag2 = function (direction) {
       this.moveLeft();
       this.moveDown();
   }
   
   Vehicle.prototype.moveRampage1 = function(){
       $(this.div).animate({
           top: height}, {
               duration: this.speed * .5,
               queue: false,
               complete: this.moveDiag1.bind(this)
           }
       );
   }
   
      Vehicle.prototype.moveRampage2 = function(){
       $(this.div).animate({
           top: height}, {
               duration: this.speed,
               queue: false,
               complete: this.moveDiag1.bind(this)
           }
       );
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
        $(this.div).css({"background-color": 	"#FF" + 
        Math.floor(Math.random()* 256).toString(16) + 
        Math.floor(Math.random()* 256).toString(16)
  		})
        $(this.div).css({"top": Math.floor(Math.random() * 600 + 30)})
       this.tolerance = 2;
       this.speed = 3000;
       this.move = function() {
           this.moveRight();
           
       }
   }
   Car.prototype = Vehicle.prototype;
   
   
   
   function CopCar() {
       this.createVehicle('CopCar');
       $(this.div).css({"left": Math.floor(Math.random() * 600 + 30)})
       this.tolerance = 3;
       this.speed = 2000;
       this.move = function() {
           this.moveDown();
       }
   }
   CopCar.prototype = Vehicle.prototype;
   
   
   
   function Motorcycle() {
       this.createVehicle('Motorcycle');
       $(this.div).css({"top": Math.floor(Math.random() * 600 + 30)})
       this.tolerance = 1;
       this.speed = 1400;
       this.move = function(){
           this.moveDiag1();
       }
   }
   Motorcycle.prototype = Vehicle.prototype;



   function Tank() {
       this.createVehicle('Tank');
       $(this.div).css({"left": Math.floor(Math.random() * 600 + 30)})
       this.tolerance = 10;
       this.speed = 4000;
       this.move = function(){
           this.moveDiag2();
       }
   }
   Tank.prototype = Vehicle.prototype;
   
   
   function Godzilla() {
       this.createVehicle('Godzilla');
       $(".Godzilla").css({"top": Math.floor(Math.random() * 300 + 150)})
       this.tolerance = 100;
       this.speed = 12000;
       this.move = function(){
           this.moveDiag1();
           //this.moveRampage2();
       }
   }
   Godzilla.prototype = Vehicle.prototype;


});


