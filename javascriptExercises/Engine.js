export default class Engine {

    constructor(serialnumber, producer) {
        this.serialnumber = serialnumber;
        this.producer = producer;
    }

    run() {
        console.log("I am running" + this.serialnumber);
    }

    getProducerInfo() {
        console.log("I was built by " + this.producer);
    }
}