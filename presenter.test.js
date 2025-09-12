import { describe, it, expect, vi, beforeEach } from "vitest";
const View = require('./view');
const Presenter = require('./presenter')

describe('Presenter', () =>{
    let view;

    beforeEach(() =>{
        view = new View();
        spyAllMethodsOf(view);

    });

    describe('When it is loaded', () =>{
        it('show the default time', () =>{
             new Presenter(view);

             expect(view.showTime).toHaveBeenCalledWith({minutes: 25, seconds: 0});
        });
    });

    describe('When Reset is requested', () =>{
        it('shows the default time', () =>{
            let onResetRequestedHandler;
            view.subscribeToOnResetClicked.mockImplementation((handler)=>{
                    onResetRequestedHandler = handler;
                });
            new Presenter(view);

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

            new Presenter(view);

            onStopRequestedHandler();

            expect(timer.stop).toHaveBeenCalled();
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