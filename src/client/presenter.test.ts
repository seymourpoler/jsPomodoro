import {beforeEach, describe, expect, it} from "vitest";
import {spyAllMethodsOf} from "../testing";
import {View} from "./view";
import {Service} from "./service";
import {Presenter} from "./presenter";
import {Sound} from "./sound";

describe('Presenter', () => {
    let view : View;
    let service: Service;
    let sound: Sound;

    beforeEach(() =>{
        view = new View();
        spyAllMethodsOf(view);
        service = new Service();
        spyAllMethodsOf(service);
        sound = new Sound();
        spyAllMethodsOf(sound);
    });

    describe("When Start is requested", () => {
        it('Starts', () =>{
            let onStartIsRequestedHandler = () =>{};
            (view.subscribeWhenStartIsRequested as any).mockImplementation((handler: any) => {
                onStartIsRequestedHandler = handler;
            });
            new Presenter(view, service, sound);

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
            new Presenter(view, service, sound);

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
            new Presenter(view, service, sound);

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
                new Presenter(view, service, sound);

                onTimerIsUpdatedHandler(25, 0);

                expect(view.showTime).toHaveBeenCalled();
            });
        });
    });

    describe("When the time is up", () => {
        it('sounds the alarm', () => {
            let onTimerIsUpdatedHandler: any;
            (service.subscribeWhenTimeIsUpdated as any).mockImplementation((handler: any) => {
                onTimerIsUpdatedHandler = handler;
            });
            new Presenter(view, service, sound);

            onTimerIsUpdatedHandler(0, 0);

            expect(sound.play).toHaveBeenCalled();
            expect(service.stop).toHaveBeenCalled();
        })
    })
});