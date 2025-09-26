import {describe, it, expect, vi, beforeEach, afterEach} from "vitest";
import{spyAllMethodsOf} from "../testing";
const TimerView = require('./timerView');
const Bus = require('../bus');
const Timer = require('./timer');
const Time = require('./time');
const Sound = require('./sound');
const TimerPresenter = require('./timerPresenter');

describe('TimerPresenter', () =>{
    let view, bus, timer, time, sound;

    beforeEach(() =>{
        view = new TimerView();
        spyAllMethodsOf(view);
        bus = new Bus();
        timer = new Timer();
        spyAllMethodsOf(timer);
        sound = new Sound();
        spyAllMethodsOf(sound);
        time = new Time(25,0);
        vi.useFakeTimers()
    });

    describe('When it is loaded', () =>{
        it('show the default time', () =>{
             new TimerPresenter(view, bus, timer, sound, time);

             expect(view.showTime).toHaveBeenCalledWith(25, 0);
        });
    });

    describe('When Reset is requested', () =>{
        it('shows the default time', () =>{
            let onResetRequestedHandler;
            view.subscribeToOnResetClicked.mockImplementation((handler)=>{
                    onResetRequestedHandler = handler;
                });
            new TimerPresenter(view, bus, timer, sound, time);

            onResetRequestedHandler();

            expect(view.showTime).toHaveBeenCalledWith(25, 0);
            expect(timer.reset).toHaveBeenCalled();
        });
    });

    describe('when Stop is requested', () =>{
        it('stops the timer', () =>{
            let onStopRequestedHandler;
            view.subscribeToOnStopClicked.mockImplementation((handler)=>{
                onStopRequestedHandler = handler;
            });
            new TimerPresenter(view, bus, timer, sound, time);

            onStopRequestedHandler();

            expect(timer.stop).toHaveBeenCalled();
        });
    });

    describe('When Start is requested', () =>{
        it('starts the timer', () =>{
            let onStartRequestedHandler;
            view.subscribeToOnStartClicked.mockImplementation((handler)=>{
                onStartRequestedHandler = handler;
            });
            new TimerPresenter(view, bus, timer, sound, time);

            onStartRequestedHandler();

            expect(timer.start).toHaveBeenCalled();
        });
    });

    describe('when the time is up', ()=>{
        it('should play a sound and timer stops', () =>{
            const time = new Time(0, 1);
            let onStartRequestedHandler;
            view.subscribeToOnStartClicked.mockImplementation((handler)=>{
                onStartRequestedHandler = handler;
            });
            let onTimerStartRequestHandler;
            timer.start.mockImplementation((handler)=>{
                onTimerStartRequestHandler = handler;
            });
            new TimerPresenter(view, bus, timer, sound, time);
            onStartRequestedHandler();

            onTimerStartRequestHandler();

            expect(timer.start).toHaveBeenCalled();
            expect(sound.play).toHaveBeenCalled();
            expect(timer.stop).toHaveBeenCalled();
        });
    });

    describe('when the configuration is updated', ()=>{
        it('updates the time', () =>{
            new TimerPresenter(view, bus, timer, sound, time);

            bus.publish('updatedConfiguration', {minutes:35, seconds:12});

            expect(view.showTime).toHaveBeenCalledWith(25, 0);
           expect(view.showTime).toHaveBeenLastCalledWith(35, 12);
        });
    })

    afterEach(()=> {
        vi.useRealTimers();
    });
});