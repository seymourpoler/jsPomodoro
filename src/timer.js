function Timer(){
    let self = this;
    let interval= null;
    const oneSecond = 1000;

    self.start = function (handler) {
        interval = setInterval(handler, oneSecond);
    };

    self.stop = function (){
        clearInterval(interval);
        interval = null;
    };

    self.reset = function(){
        clearInterval(interval);
        interval = null;
    };
}

if(module && module.exports){
    module.exports	= Timer;
}