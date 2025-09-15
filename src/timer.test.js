import {vi, describe, expect, beforeEach, afterEach, it} from "vitest";
const Timer = require('./timer');

describe('Timer', function() {
    beforeEach(function() {
        vi.useFakeTimers();
    });
    describe('when the start is requested', function() {
        it('should start the timer and call the handler at one-second intervals', () => {
            const timer = new Timer();
            const handler = vi.fn();

            timer.start(handler);

            vi.advanceTimersByTime(3000);
            expect(handler).toHaveBeenCalledTimes(3);
        });
    });

    describe('when the stop is requested', () => {
        it('should stop the timer', () => {
            const timer = new Timer();
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
            const timer = new Timer();
            const handler = vi.fn();
            timer.start(handler);
            vi.advanceTimersByTime(1000);

            timer.reset();

            vi.advanceTimersByTime(1000);
            expect(handler).toHaveBeenCalledTimes(1);
        });

        it('should reset the timer', () => {
            const timer = new Timer();
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

    afterEach(() => {
        vi.useRealTimers();
    });
});