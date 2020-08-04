const Vehicle = require('../classes/vehicle');
const Car = require('../classes/car');
const Moto = require('../classes/moto');
const VehicleList = require('./vehicleList');

// CREATING TWO CARS OBJETCS
const car1 = new Car('Peugeot', '206', 200000, 4);
const car2 = new Car('Peugeot', '208', 250000, 5);
// CREATING TO MOTORBIKES OBJECTS
const moto1 = new Moto('Honda', 'Titan', 60000, 125);
const moto2 = new Moto('Yamaha', 'YBR', 80500.5, 160);

//CREATING A LIST
const vehicleList = [car1, car2, moto1, moto2];

const list = new VehicleList(vehicleList);

//Show all data
list.showMain();

//EXTRA: show list order by more expensive to cheaper
console.log('\n\n==============================');
console.log('EXTRA');
console.log('==============================\n');

list.showOrderedVehicles();