import {vi, describe, expect, beforeEach, afterEach, it} from "vitest";
const Timer = require('./timer');
const Time = require('./time');

describe('Timer', () => {
    let timer;

    beforeEach(() => {
        vi.useFakeTimers();
        timer = new Timer();
    });

    describe('when the start is requested', () => {
        it('should start the timer and call the handler at one-second intervals', () => {
            const handler = vi.fn();

            timer.onStart(new Time(0,4), handler);

            vi.advanceTimersByTime(3000);
            expect(handler).toHaveBeenCalledTimes(3);
        });

        it('should not start the timer if it is already running', () => {
            const handler = vi.fn();

            timer.onStart(new Time(0,1),(handler));
            timer.onStart(new Time(0,1),(handler))

            vi.advanceTimersByTime(1000);
            expect(handler).toHaveBeenCalledTimes(1);
        });
    });

    describe('when the stop is requested', () => {
        it('should stop the timer', () => {
            const handler = vi.fn();

            timer.onStart(new Time(1,3), handler);

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
                expect(() => timer.stop()).not.toThrow();
                expect(() => timer.reset()).not.toThrow();

                timer.start(()=>{});
                timer.stop();

                expect(() => timer.stop()).not.toThrow();
                expect(() => timer.reset()).not.toThrow();
            });
        });
    });

    describe('when the end is requested', () => {
        it('should end timers', () => {
            let wasCalled = false;
            timer.onStart(new Time(0, 2), (minutes, seconds) =>{});
            timer.onEnd(() =>{
                wasCalled = true;
            });
            vi.advanceTimersByTime(10000);

            expect(wasCalled).toBeTruthy();
        });
    });

    afterEach(() => {
        vi.useRealTimers();
    });
});