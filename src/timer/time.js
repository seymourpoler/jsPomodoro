function Time(minutes, seconds){
    const minimumNumberOfSeconds = 0;
    let self = this;

    let currentSeconds = (minutes*60) + seconds;

    self.getMinutes = function(){
        return Math.trunc(currentSeconds/60);
    };

    self.getSeconds = function(){
        return Math.trunc(currentSeconds % 60);
    };

    self.decreaseOneSecond = function(){
        if(currentSeconds > minimumNumberOfSeconds){
            currentSeconds -= 1;
        }
    };

    self.isUp = function(){
        return currentSeconds <= minimumNumberOfSeconds;
    };

    self.clone = function() {
        return new Time(self.getMinutes(), self.getSeconds());
    };
}

if(module && module.exports){
    module.exports = Time;
}