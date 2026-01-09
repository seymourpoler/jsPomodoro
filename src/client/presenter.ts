import {View} from "./view";
import {Service} from "./service";

export class Presenter {
    constructor(private readonly view: View, private readonly service: Service) {
        view.subscribeWhenStartIsRequested(this.onStartIsRequestedHandler);
        view.subscribeWhenStopIsRequested(this.onStopIsRequestedHandler);
        view.subscribeWhenResetIsRequested(this.onResetIsRequestedHandler);
        service.subscribeWhenTimeIsUpdated(this.onTimeIsUpdatedHandler);
    }

    private onStartIsRequestedHandler = (): void => {
        this.service.start();
    }

    private onStopIsRequestedHandler = (): void => {
        this.service.stop();
    };

    private onResetIsRequestedHandler = (): void => {
        this.service.reset();
    };

    private onTimeIsUpdatedHandler = (time: number): void => {
        const minutes = Math.floor(time / 60);
        const seconds = time - minutes * 60;
        this.view.showTime(minutes, seconds);
    }
}