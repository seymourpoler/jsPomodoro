import { describe, it, expect, vi, beforeEach } from "vitest";
const View = require('./view');
const Timer = require('./timer');
const Time = require('./time');
const Presenter = require('./presenter');

describe('Presenter', () =>{
    let view;
    let timer;

    beforeEach(() =>{
        view = new View();
        timer = new Timer();
        spyAllMethodsOf(timer);
        spyAllMethodsOf(view);

    });

    describe('When it is loaded', () =>{
        it('show the default time', () =>{
             new Presenter(view, timer);

             expect(view.showTime).toHaveBeenCalled();
        });
    });

    describe('When Reset is requested', () =>{
        it('shows the default time', () =>{
            let onResetRequestedHandler;
            view.subscribeToOnResetClicked.mockImplementation((handler)=>{
                    onResetRequestedHandler = handler;
                });
            new Presenter(view, timer);

            onResetRequestedHandler();

            expect(view.showTime).toHaveBeenCalled();
            expect(timer.reset).toHaveBeenCalled();
        });
    });

    describe('when Stop is requested', () =>{
        it('stops the timer', () =>{
            let onStopRequestedHandler;
            view.subscribeToOnStopClicked.mockImplementation((handler)=>{
                onStopRequestedHandler = handler;
            });
            new Presenter(view, timer);

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
            new Presenter(view, timer);

            onStartRequestedHandler();

            expect(timer.start).toHaveBeenCalled();
        });
    });
});

function spyAllMethodsOf(element){

    for (const property in element) {
        if (typeof element[property] == "function") {
            vi.spyOn(element, property);
        }
    }
}