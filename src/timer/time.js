function Time(minutes, seconds){
    const minimumNumberOfSeconds = 0;
    let self = this;

    let currentSeconds = (minutes*60) + seconds;

    self.minutes = function(){
        return Math.trunc(currentSeconds/60);
    };

    self.seconds = function(){
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
        return new Time(self.minutes(), self.seconds());
    };
}

if(module && module.exports){
    module.exports = Time;
}