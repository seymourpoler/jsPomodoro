import {beforeEach, describe, expect, it} from "vitest";
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

    describe("When Stop is requested", () => {
        it('Stops', () =>{
            let onStopIsRequestedHandler = () =>{};
            (view.subscribeWhenStopIsRequested as any).mockImplementation((handler: any) => {
                onStopIsRequestedHandler = handler;
            });
            new Presenter(view, service);

            onStopIsRequestedHandler();

            expect(service.stop).toHaveBeenCalled();
        });
    });

    describe("When Reset is requested", () => {
        it('Resets', () =>{
            let onResetIsRequestedHandler = () =>{};
            (view.subscribeWhenResetIsRequested as any).mockImplementation((handler: any) => {
                onResetIsRequestedHandler = handler;
            });
            new Presenter(view, service);

            onResetIsRequestedHandler();

            expect(service.reset).toHaveBeenCalled();
        });
    });

    describe("When timer is updated", () => {
        describe("When timer is updated", () => {
            it('shows the time', () => {
                let onTimerIsUpdatedHandler: any;
                (service.subscribeWhenTimeIsUpdated as any).mockImplementation((handler: any) => {
                    onTimerIsUpdatedHandler = handler;
                });
                new Presenter(view, service);

                onTimerIsUpdatedHandler(25, 0);

                expect(view.showTime).toHaveBeenCalled();
            });
        });
    });
});