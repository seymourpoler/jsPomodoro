import {vi, describe, expect, beforeEach, afterEach, it} from "vitest";
import {spyAllMethodsOf} from "../testing";

const Timer = require('./timer');
const Time = require('./time');
const Sound = require('./sound');

describe('Timer', () => {
    let sound = new Sound()
    let timer;

    beforeEach(() => {
        vi.useFakeTimers();
        spyAllMethodsOf(sound);
        timer = new Timer(sound);
    });

    describe('when the start is requested', () => {
        it('should start the timer and call the handler at one-second intervals', () => {
            const handler = vi.fn();

            timer.start(handler);

            vi.advanceTimersByTime(3000);
            expect(handler).toHaveBeenCalledTimes(3);
        });

        it('should not start the timer if it is already running', () => {
            const handler = vi.fn();

            timer.start(handler);
            timer.start(handler);

            vi.advanceTimersByTime(1000);
            expect(handler).toHaveBeenCalledTimes(1);
        });
    });

    describe('when the stop is requested', () => {
        it('should stop the timer', () => {
            const handler = vi.fn();

            timer.start(handler);

            vi.advanceTimersByTime(2000);
            expect(handler).toHaveBeenCalledTimes(2);

            timer.stop();

            vi.advanceTimersByTime(2000);
            expect(handler).toHaveBeenCalledTimes(2);
        });
    });

    describe('when the reset is requested', () => {
        it('should reset the timer', () => {
            const handler = vi.fn();
            timer.start(handler);
            vi.advanceTimersByTime(1000);

            timer.reset();

            vi.advanceTimersByTime(1000);
            expect(handler).toHaveBeenCalledTimes(1);
        });

        it('should reset the timer', () => {
            const handler = vi.fn();

            timer.start(handler);

            vi.advanceTimersByTime(1000);
            expect(handler).toHaveBeenCalledTimes(1);

            timer.reset();

            vi.advanceTimersByTime(1000);
            expect(handler).toHaveBeenCalledTimes(1);

            timer.start(handler);
            vi.advanceTimersByTime(1000);
            expect(handler).toHaveBeenCalledTimes(2);
        });

    });

    describe('when the start and the stop is requested', () => {
        describe('without an active interval', () => {
            it('should stop and reset timers', () => {
                const timer = new Timer();

                expect(() => timer.stop()).not.toThrow();
                expect(() => timer.reset()).not.toThrow();

                timer.start(()=>{});
                timer.stop();

                expect(() => timer.stop()).not.toThrow();
                expect(() => timer.reset()).not.toThrow();
            });
        });
    });

    describe('When the timer ends', () => {
        it('should stop', () => {
            const time = new Time(0, 2);
            let isCalled = false;
            timer.onEnd(() =>{
                isCalled = true;
            });

            timer.onStart(time, () =>{});
            vi.advanceTimersByTime(3000);

            expect(isCalled).toBe(true);
        });
    });

    describe('When the timer starts', () => {
        it('should start', () => {
            const time = new Time(0, 2);
            let isCalled = false;

            timer.onStart(time, () =>{isCalled = true;});
            vi.advanceTimersByTime(3000);

            expect(isCalled).toBe(true);
        });
    });

    describe('When current time is requested', ()=>{
        it('should return the current time', () => {
            const time = new Time(12, 23);
            timer.onStart(time, () =>{});
            vi.advanceTimersByTime(30000);

            const currentTime = timer.time();

            expect(currentTime).toEqual({minutes: 11, seconds: 53});
        });
    });

    afterEach(() => {
        vi.useRealTimers();
    });
});