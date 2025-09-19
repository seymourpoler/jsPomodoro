import {describe, beforeEach, it, expect} from "vitest";
const Bus = require('./bus');

describe("Bus", () => {
    let bus, producer, consumer, receiver;

    beforeEach(() =>{
        bus = new Bus();
        producer = new Producer(bus);
        consumer = new Consumer(bus);
        receiver = new Receiver(bus);
    });

    describe("When publish an event is requested", () => {
        it('multiple consumers receive an event', () => {
            producer.produce( 12,'it works');

            expect(consumer.id()).toEqual(12);
            expect(consumer.message()).toEqual('it works');
            expect(receiver.id()).toEqual(12);
            expect(receiver.message()).toEqual('it works');
        });
    });
});

function Producer(bus){
    let self = this;

    self.produce = function(id, message){
        const anEvent = {id, message};
        bus.publish('eventProduced', anEvent);
    };
}

function Consumer(bus){
    let self = this;
    let anEvent = null;

    bus.subscribe('eventProduced', (theEvent) => {
        anEvent = {
            id: theEvent.id,
            message: theEvent.message,
        };
    });

    self.id = function (){
        return anEvent.id;
    };
    self.message = function (){
        return anEvent.message;
    };
}

function Receiver(bus){
    let self = this;
    let anEvent = null;

    bus.subscribe('eventProduced', (theEvent) => {
        anEvent = {
            id: theEvent.id,
            message: theEvent.message,
        };
    });

    self.id = function (){
        return anEvent.id;
    };
    self.message = function (){
        return anEvent.message;
    };
}