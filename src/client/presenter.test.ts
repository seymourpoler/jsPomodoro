import {beforeEach, describe, expect, it, type Mocked} from "vitest";
import {spyAllMethodsOf} from "../testing";
import {View} from "./view";
import {Service} from "./service";
import {Presenter} from "./presenter";

describe('Presenter', () => {
    let view : Mocked<View>;
    let service: Mocked<Service>;

    beforeEach(() =>{
        const rawView = new View();
        spyAllMethodsOf(rawView);
        view = rawView as any as Mocked<View>;

        const rawService = new Service();
        spyAllMethodsOf(rawService);
        service = rawService as any as Mocked<Service>;
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
        describe("When timer is updated", () => {
            it('shows the time', () => { // Added the missing 'it' block
                let onTimerIsUpdatedHandler: any;
                service.subscribeWhenTimeIsUpdated.mockImplementation((handler: any) => {
                    onTimerIsUpdatedHandler = handler;
                });

                new Presenter(view, service);
                onTimerIsUpdatedHandler(25, 0); // Pass sample values

                expect(view.showTime).toHaveBeenCalled();
            });
        });
    });
});