import Engine from "./Engine.js";

export default class Car {

    constructor(color, brand, year, country, horsepower, owner) {
        this.color = color;
        this.brand = brand;
        this.year = year;
        this.country = country;
        this.horsepower = horsepower;
        this.owner = owner;
    }

    setEngine(engine) {
        this.engine = engine;
    }

    printspecification() {
        console.log("color: " + this.color + " brand: " + this.brand + " year: " + this.year + " country: " + this.country + " horsepower: " + this.horsepower + " owner: " + this.owner);
    }

    drive() {
        console.log("I am starting to drive...");
        this.engine.run();
    }
}