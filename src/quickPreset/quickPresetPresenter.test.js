import {beforeEach, describe, it, expect} from "vitest";
import{spyAllMethodsOf} from "../testing";
const Bus = require('../bus');
const QuickPresetPresenter = require('./quickPresetPresenter');
const QuickPresetView = require('./quickPresetView');

describe('quick preset', () => {
    let view, presenter, bus;

    beforeEach(()=>{
        view = new QuickPresetView();
        spyAllMethodsOf(view);
        bus = new Bus();
        spyAllMethodsOf(bus);
    });

    describe('when 25 minutes and 0 seconds is requested', () => {
        it('publishes the event', ()=>{
            let on25MinutesClickedHandler;
            view.subscribeToOn25MinutesClicked.mockImplementation((handler) =>{
                on25MinutesClickedHandler = handler;
            });
            new QuickPresetPresenter(view, bus);

            on25MinutesClickedHandler();

            expect(bus.publish).toHaveBeenCalledWith('selectedQuickPreset', {minutes: 25, seconds: 0});
        });
    });

    describe('when 5 minutes and 0 seconds  is requested', () => {
        it('publishes the event', ()=>{
            let on5MinutesClickedHandler;
            view.subscribeToOn5MinutesClicked.mockImplementation((handler) =>{
                on5MinutesClickedHandler = handler;
            });
            new QuickPresetPresenter(view, bus);

            on5MinutesClickedHandler();

            expect(bus.publish).toHaveBeenCalledWith('selectedQuickPreset', {minutes: 5, seconds: 0});
        });
    });
});