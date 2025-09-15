function Timer(){
    const oneSecond = 1000;

    let self = this;
    let interval= null;
    let isRunning = false;

    self.start = function (handler) {
        if(isRunning){
            return;
        }
        interval = setInterval(handler, oneSecond);
        isRunning = true;
    };

    self.stop = function (){
        clearInterval(interval);
        interval = null;
        isRunning = false;
    };

    self.reset = function(){
        clearInterval(interval);
        interval = null;
        isRunning = false;
    };
}

if(module && module.exports){
    module.exports	= Timer;
}