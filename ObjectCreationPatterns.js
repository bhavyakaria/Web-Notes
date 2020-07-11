// Factory Pattern
let carFactory = (wheels, engine) => {
	const car = {};

	// Creating class properties
	car.wheels = wheels;
	car.engine = engine;

	// Creating class methods
	car.showCarParts = function() {
		console.log('Wheels: ' + this.wheels);
		console.log('Engine: ' + this.engine);
	};
	return car;
};

// Creating car object using Factory Pattern
const car1 = carFactory('MRF', 'V-8');
const car2 = carFactory('Apollo', 'I-6');

car1.showCarParts();
car2.showCarParts();

// ========================================================

// Constructor Pattern
let car = function(wheels, engine) {
	
	// Creating class properties
	this.wheels = wheels;
	this.engine = engine;

	// Creating class methods
	this.showCarParts = function() {
		console.log('Wheels: ' + this.wheels);
		console.log('Engine: ' + this.engine);
	};
};

// Creatin new Objects for car using Constructor Pattern
const car3 = new car('CEAT', 'I-8');
const car4 = new car('JK Tyre', 'V-6');

car3.showCarParts();
car4.showCarParts();

// ========================================================

// Prototype Pattern
const carObj = function() {};

carObj.prototype.wheels = NaN;
carObj.prototype.engine = NaN;
carObj.prototype.showCarParts = function() {
	console.log('Wheels: ' + this.wheels);
	console.log('Engine: ' + this.engine);
};

// Creating new objects using Prototype Pattern
const car5 = new carObj();
car5.wheels = 'Goodyear';
car5.engine = 'I-4';

const car6 = new carObj();
car6.wheels = 'Bridgestone';
car6.engine = 'Turbo Someting';

car5.showCarParts();
car6.showCarParts();

// ========================================================

// Dynamic Prototype Pattern

