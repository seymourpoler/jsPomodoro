import {describe, it, expect} from "vitest";
const Time = require('./time');

describe('time', () => {
    describe('when getting minutes are requested', () => {
        it('should show minutes', () =>{
            const time = new Time(9, 0);

            const minutes = time.getMinutes();

            expect(minutes.toString().padStart(2, '0')).toBe('09');
        });
    });
    
    describe('when getting seconds are requested', () => {
        it('should show seconds', () =>{
            const time = new Time(19, 8);

            const seconds = time.getSeconds();

            expect(seconds.toString().padStart(2, '0')).toBe('08');
        });
    });
});