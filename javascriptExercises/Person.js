export default class Person {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    getInfo() {
        console.log("name: " + this.name + " age: " + this.age + " email: " + this.email);
    }
}