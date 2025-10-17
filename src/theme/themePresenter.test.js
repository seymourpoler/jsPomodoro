import {describe, beforeEach, it, expect} from "vitest";
import {spyAllMethodsOf} from "../testing";

const ThemeView = require('./themeView');
const ThemePresenter = require('./themePresenter');

describe('ThemePresenter', () => {
    let view, presenter;

    beforeEach(() => {
        view = new ThemeView();
        spyAllMethodsOf(view);
        presenter = new ThemePresenter(view);
    });

    describe('When the presenter is loaded', () => {
        it('dark theme is requested', ()=>{
            expect(view.showDark).toHaveBeenCalled();
        });
    });

    describe('When the light is requested', () => {
        it('light theme is shown', ()=>{
            let onChangingThemeClickedHandler;
            view.subscribeToChangeThemeClicked.mockImplementation((handler)=>{
                onChangingThemeClickedHandler = handler;
            });
            new ThemePresenter(view);

            onChangingThemeClickedHandler();

            expect(view.showLight).toHaveBeenCalled();
        });
    });

    describe('When the dark is requested', () => {
        it('dark theme is shown', ()=>{
            let onChangingThemeClickedHandler;
            view.subscribeToChangeThemeClicked.mockImplementation((handler)=>{
                onChangingThemeClickedHandler = handler;
            });
            new ThemePresenter(view);

            onChangingThemeClickedHandler();
            onChangingThemeClickedHandler();

            expect(view.showDark).toHaveBeenLastCalledWith();
        });
    });
});