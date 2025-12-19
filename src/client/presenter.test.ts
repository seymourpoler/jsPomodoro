import {beforeEach, describe, expect, it, type Mocked} from "vitest";
import {spyAllMethodsOf} from "../testing";
import {View} from "./view";
import {Service} from "./service";
import {Presenter} from "./presenter";

describe('Presenter', () => {
    let view : Mocked<any>;
    let service: Mocked<any>;

    beforeEach(() =>{
        view = spyAllMethodsOf(Object.create(View.prototype));
        service = spyAllMethodsOf(Object.create(Service.prototype));
    });

    describe("When Start is requested", () => {
        it('Starts', () =>{
            let onStartIsRequestedHandler = () =>{};
            view.subscribeWhenStartIsRequested.mockImplementation((handler: any) => {
                onStartIsRequestedHandler = handler;
            });
            new Presenter(view, service);

            onStartIsRequestedHandler();

            expect(service.start).toHaveBeenCalled();
        });
    });

    describe("When timer is updated", () => {
        let onTimerIsUpdatedHandler = () =>{};
        service.subscribeWhenTimeIsUpdated.mockImplementation((handler: any) => {
            onTimerIsUpdatedHandler = handler;
        });
        new Presenter(view, service);

        onTimerIsUpdatedHandler();

        expect(view.showTime).toHaveBeenCalled();
    });
});