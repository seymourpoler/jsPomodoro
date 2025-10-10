import {describe, beforeEach, it, expect} from "vitest";
import {spyAllMethodsOf} from "../testing";
import QuickPresetPresenter from "../quickPreset/quickPresetPresenter";

const Bus = require('../bus');
const TogglePresenter = require('./togglePresenter');
const ToggleView = require('./toggleView');

describe('TogglePresenter', () => {
    let view, bus, presenter;

    beforeEach(() =>{
        view = new ToggleView();
        spyAllMethodsOf(view);
        bus = new Bus();
        spyAllMethodsOf(bus);

        presenter = new TogglePresenter(view, bus);
    });

    describe('when loading configuration section is hidden', () => {
        it('should send an event to hide configuration section', () => {
            expect(bus.publish).toHaveBeenCalledWith('hideConfigurationSection');
        });
    })

    describe('when showing configuration section is requested', () => {
        it('should send an event to show configuration section', () => {
            let onShowConfigurationSectionClickedHandler;
            view.subscribeToOnShowConfigurationSectionClicked.mockImplementation((handler)=>{
                onShowConfigurationSectionClickedHandler = handler;
            });
            new TogglePresenter(view, bus);

            onShowConfigurationSectionClickedHandler();

            expect(bus.publish).toHaveBeenCalledWith('showConfigurationSection');
        });
    });
});