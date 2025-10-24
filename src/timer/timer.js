function Timer(){
    const oneSecond = 1000;

    let self = this;
    let interval= null;
    let isRunning = false;
    let onEndHandler = ()=>{} ;

    self.start = (handler) => {
        if(isRunning){
            return;
        }
        interval = setInterval(handler, oneSecond);
        isRunning = true;
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

    self.onStart = (time, handler) =>{
        setInterval(() =>{
            time.decreaseOneSecond();
            handler(time.minutes(), time.seconds());
            if(time.isUp()) {
                onEndHandler();
            }
        }, oneSecond);
    };

    self.onEnd = (handler) =>{
        onEndHandler = handler;
    };
}

if(module && module.exports){
    module.exports	= Timer;
}