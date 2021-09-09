import Car from './Car.js';
import Person from './Person.js';
import Engine from './Engine.js';
import SuperCar from './SuperCar.js';

let car1 = new Car("black", "Mercedes Benz", "2021", "Germany", 150, "Alexander");
let person = new Person("Alexander", 29, "alexander@email.com")
let engine = new Engine(123456789, "Mercedes Benz AG");
let superCar = new SuperCar("silver", "Mercedes Benz AMG", "2021", "Germany", 555, "Alexander");

car1.printspecification();
car1.setEngine(engine);
car1.drive();

superCar.setEngine(engine);
superCar.drive();
superCar.getTurboBoost();

engine.getProducerInfo();

person.getInfo();

