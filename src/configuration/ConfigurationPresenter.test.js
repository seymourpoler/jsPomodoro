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

    describe('when applying changes is requested', () => {
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
});