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
});