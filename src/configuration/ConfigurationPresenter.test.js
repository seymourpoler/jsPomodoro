import {describe, beforeEach, it} from "vitest";
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
        it('applies the changes', () =>{
            let onApplyChangesHandler;
            view.subscribeToOnApplyChangesIsClicked.mockImplementation((handler) =>{
                onApplyChangesHandler = handler;
            });
            new ConfigurationPresenter(view);

            onApplyChangesHandler();

            const event = {type:'configurationApplied', values:{minutes: 20, seconds: 15}};
            expect(bus.publish).toHaveBeenCalledWith(event);
        });
    });
});