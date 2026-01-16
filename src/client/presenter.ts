import {View} from "./view";
import {Service} from "./service";
import {Sound} from "./sound";

export class Presenter {
    constructor(private readonly view: View, private readonly service: Service, private readonly sound: Sound) {
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
        if(time === 0){
            this.sound.play();
            this.service.stop();
            return;
        }
        const minutes = Math.floor(time / 60);
        const seconds = time - minutes * 60;
        this.view.showTime(minutes, seconds);
    }
}