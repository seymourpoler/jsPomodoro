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
    });

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

    describe('when hiding configuration section is requested', () => {
        it('should send an event to hide configuration section', () => {
            let onShowConfigurationSectionClickedHandler;
            view.subscribeToOnShowConfigurationSectionClicked.mockImplementation((handler)=>{
                onShowConfigurationSectionClickedHandler = handler;
            });
            new TogglePresenter(view, bus);

            onShowConfigurationSectionClickedHandler();
            onShowConfigurationSectionClickedHandler();

            expect(bus.publish).toHaveBeenLastCalledWith('hideConfigurationSection');
        });
    });

    describe('when loading preset section is hidden', () => {
        it('should send an event to hide configuration section', () => {
            expect(bus.publish).toHaveBeenCalledWith('hidePresetSection');
        });
    });

    describe('when showing preset section is requested', () => {
        it('should send an event to show preset section', () => {
            let onShowPresetSectionClickedHandler;
            view.subscribeToOnShowPresetSectionClicked.mockImplementation((handler)=>{
                onShowPresetSectionClickedHandler = handler;
            });
            new TogglePresenter(view, bus);

            onShowPresetSectionClickedHandler();

            expect(bus.publish).toHaveBeenCalledWith('showPresetSection');
        });
    });

    describe('when hiding preset section is requested', () => {
        it('should send an event to hide preset section', () => {
            let onShowPresetSectionClickedHandler;
            view.subscribeToOnShowPresetSectionClicked.mockImplementation((handler)=>{
                onShowPresetSectionClickedHandler = handler;
            });
            new TogglePresenter(view, bus);

            onShowPresetSectionClickedHandler();
            onShowPresetSectionClickedHandler();

            expect(bus.publish).toHaveBeenLastCalledWith('hidePresetSection');
        });
    });

    describe('when loading todo list section is hidden', () => {
        it('should send an event to hide todo list section', () => {
            expect(bus.publish).toHaveBeenCalledWith('hideTodoSection');
        });
    });

    describe('when showing todo list section is requested', () => {
        it('should send an event to show todo list section', () => {
            let onShowTodoSectionClickedHandler;
            view.subscribeToOnShowTodoSectionClicked.mockImplementation((handler)=>{
                onShowTodoSectionClickedHandler = handler;
            });
            new TogglePresenter(view, bus);

            onShowTodoSectionClickedHandler();

            expect(bus.publish).toHaveBeenCalledWith('showTodoSection');
        });
    });
});