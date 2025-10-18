import {describe, it, expect, vi, beforeEach, afterEach} from "vitest";
import{spyAllMethodsOf} from "../testing";

const TimerView = require('./timerView');
const Timer = require('./timer');
const Time = require('./time');
const Bus = require('../bus');
const TimerPresenter = require('./timerPresenter');

describe('TimerPresenter', () =>{
    let view, bus, timer, time, sound;

    beforeEach(() =>{
        view = new TimerView();
        spyAllMethodsOf(view);
        bus = new Bus();
        spyAllMethodsOf(bus);
        timer = new Timer(new Time(25, 0), bus);
        spyAllMethodsOf(timer);
        timer.time = () => {return { minutes: 25, seconds: 0 }};
        timer.clone = () =>{return timer;};
    });

    describe('When it is loaded', () =>{
        it('show the default time', () =>{
             new TimerPresenter(view, timer);

             expect(view.showTime).toHaveBeenCalledWith({minutes: 25, seconds: 0});
        });
    });

    describe('When Reset is requested', () =>{
        it('shows the default time', () =>{
            let onResetRequestedHandler;
            view.subscribeToOnResetClicked.mockImplementation((handler)=>{
                    onResetRequestedHandler = handler;
                });
            new TimerPresenter(view, timer);

            onResetRequestedHandler();

            expect(view.showTime).toHaveBeenCalledWith({minutes: 25, seconds: 0});
            expect(timer.reset).toHaveBeenCalled();
        });
    });

    describe('when Stop is requested', () =>{
        it('stops the timer', () =>{
            let onStopRequestedHandler;
            view.subscribeToOnStopClicked.mockImplementation((handler)=>{
                onStopRequestedHandler = handler;
            });
            new TimerPresenter(view, timer);

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
            new TimerPresenter(view, timer);

            onStartRequestedHandler();

            expect(timer.start).toHaveBeenCalled();
        });
    });

    describe('when the time is up', ()=>{
        it('should play a sound and timer stops', () =>{
            let onStartRequestedHandler;
            view.subscribeToOnStartClicked.mockImplementation((handler)=>{
                onStartRequestedHandler = handler;
            });
            let onTimerStartRequestHandler;
            timer.start.mockImplementation((handler)=>{
                onTimerStartRequestHandler = handler;
            });
            new TimerPresenter(view, timer);
            onStartRequestedHandler();

            onTimerStartRequestHandler();

            expect(timer.start).toHaveBeenCalled();
            expect(sound.play).toHaveBeenCalled();
            expect(timer.stop).toHaveBeenCalled();
        });
    });

    afterEach(()=> {
        vi.useRealTimers();
    });
});