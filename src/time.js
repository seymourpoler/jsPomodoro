function Time(minutes, seconds){
    let self = this;

    let currentSeconds = (minutes*60) + seconds;

    self.getMinutes = function(){
        return currentSeconds/60;
    };

    self.getSeconds = function(){
        return currentSeconds;
    };

    self.decreaseOneSecond = function(){
        currentSeconds -= 1;
    };
}

if(module && module.exports){
    module.exports = Time;
}