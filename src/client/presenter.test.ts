import {beforeEach, describe, expect, it, type Mocked} from "vitest";
import {spyAllMethodsOf} from "../testing";
import {View} from "./view";
import {Service} from "./service";
import {Presenter} from "./presenter";

describe('Presenter', () => {
    let view : View;
    let service: Service;

    beforeEach(() =>{
        view = new View();
        spyAllMethodsOf(view);
        service = new Service();
        spyAllMethodsOf(service);
    });

    describe("When Start is requested", () => {
        it('Starts', () =>{
            let onStartIsRequestedHandler = () =>{};
            (view.subscribeWhenStartIsRequested as any).mockImplementation((handler: any) => {
                onStartIsRequestedHandler = handler;
            });
            new Presenter(view, service);

            onStartIsRequestedHandler();

            expect(service.start).toHaveBeenCalled();
        });
    });

    describe("When timer is updated", () => {
        describe("When timer is updated", () => {
            it('shows the time', () => { // Added the missing 'it' block
                let onTimerIsUpdatedHandler: any;
                (service.subscribeWhenTimeIsUpdated as any).mockImplementation((handler: any) => {
                    onTimerIsUpdatedHandler = handler;
                });

                new Presenter(view, service);
                onTimerIsUpdatedHandler(25, 0); // Pass sample values

                expect(view.showTime).toHaveBeenCalled();
            });
        });
    });
});