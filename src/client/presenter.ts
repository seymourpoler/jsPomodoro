import {View} from "./view";
import {Service} from "./service";

export class Presenter {
    constructor(private readonly view: View, private readonly service: Service) {
        view.subscribeWhenStartIsRequested(this.onStartIsRequestedHandler);
        service.subscribeWhenTimeIsUpdated(this.onTimeIsUpdatedHandler);
    }

    private onStartIsRequestedHandler = (): void => {
        this.service.start();
    }

    private onTimeIsUpdatedHandler = (time: number): void => {
        const minutes = Math.floor(time / 60);
        const seconds = time - minutes * 60;
        this.view.showTime(minutes, seconds);
    }
}