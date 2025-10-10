import {describe, beforeEach, it, expect} from "vitest";
import {spyAllMethodsOf} from "../testing";
const ConfigurationView = require("./configurationView");
const ConfigurationPresenter = require("./configurationPresenter");
const Bus = require('../bus')

describe('ConfigurationPresenter', () => {
    let view, bus;

    beforeEach(() => {
        view = new ConfigurationView();
        spyAllMethodsOf(view);
        bus = new Bus();
        spyAllMethodsOf(bus);
    });

    describe('When it is loaded', () =>{
        it('show the default time', () =>{
            new ConfigurationPresenter(view, bus);

            expect(view.showTime).toHaveBeenCalledWith(25, 0);
        });
    });

    describe('When applying changes is requested', () => {
        it('publishes the changes', () =>{
            let onApplyChangesHandler;
            view.subscribeToOnApplyChangesIsClicked.mockImplementation((handler) =>{
                onApplyChangesHandler = handler;
            });
            view.minutes.mockReturnValue(20);
            view.seconds.mockReturnValue(15);
            new ConfigurationPresenter(view, bus);

            onApplyChangesHandler();

            expect(bus.publish).toHaveBeenCalledWith('updatedConfiguration', {minutes: 20, seconds: 15} );
        });
    });

    describe('When hide configuration is requested', () =>{
        it('hides the configuration', () =>{
            const bus = new Bus();
            new ConfigurationPresenter(view, bus);

            bus.publish('hideConfigurationSection');

            expect(view.hide).toHaveBeenCalled();
        });
    });
});