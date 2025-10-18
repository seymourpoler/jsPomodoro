function Timer(time, bus, sound){
    const oneSecond = 1000;

    let self = this;
    let interval= null;
    let isRunning = false;
    let onEndHandler = () =>{};
    let currentTime = time.clone();

    bus.subscribe('updatedConfiguration', (theEvent)=>{
        currentTime = currentTime.cloneWith(theEvent.minutes, theEvent.seconds);
    });

    bus.subscribe('selectedQuickPreset', (theEvent)=>{
        currentTime = currentTime.cloneWith(theEvent.minutes, theEvent.seconds);
    });

    self.start = (handler) => {
        if(isRunning){
            return;
        }
        interval = setInterval(handler, oneSecond);
        isRunning = true;
    };

    self.onStart = (handler) =>{
        if(isRunning){
            return;
        }
        isRunning = true;
        interval = setInterval(()=>{
            currentTime.decreaseOneSecond();
            handler();
            if(time.isUp()){
                sound.play();
                self.stop();
            }
        }, oneSecond);

    };

    self.stop = () =>{
        clearInterval(interval);
        interval = null;
        isRunning = false;
    };

    self.reset = () =>{
        clearInterval(interval);
        interval = null;
        isRunning = false;
    };

    self.onEnd = (handler) => {
        onEndHandler = handler;
        clearInterval(interval);
        interval = null;
        isRunning = false;
    };

    self.time = () =>{
        return{
            minutes: currentTime.minutes(), seconds: currentTime.seconds()
        };
    };
}

if(module && module.exports){
    module.exports	= Timer;
}