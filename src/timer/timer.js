function Timer(sound){
    const oneSecond = 1000;

    let self = this;
    let interval= null;
    let isRunning = false;
    let onEndHandler = null;

    self.start = (handler) => {
        if(isRunning){
            return;
        }
        interval = setInterval(handler, oneSecond);
        isRunning = true;
    };

    self.onStart = (time, handler) =>{
        if(isRunning){
            return;
        }
        isRunning = true;
        interval = setInterval(()=>{
            time.decreaseOneSecond();
            handler();
            if(time.isUp()){
                onEndHandler();
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
}

if(module && module.exports){
    module.exports	= Timer;
}