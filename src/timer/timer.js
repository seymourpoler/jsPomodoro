function Timer(){
    const oneSecond = 1000;

    let self = this;
    let interval= null;
    let isRunning = false;

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
}

if(module && module.exports){
    module.exports	= Timer;
}