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

            // Advance time by 2 seconds to confirm the timer is running
            vi.advanceTimersByTime(2000);
            expect(handler).toHaveBeenCalledTimes(2);

            // Now, stop the timer
            timer.stop();

            // Advance time by another 2 seconds. The handler count should not increase.
            vi.advanceTimersByTime(2000);
            expect(handler).toHaveBeenCalledTimes(2);
        });
    });

    afterEach(() => {
        vi.useRealTimers();
    });
});