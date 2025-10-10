function Time(minutes, seconds){
    const minimumNumberOfSeconds = 0;

    let self = this;
    let currentSeconds = (minutes*60) + seconds;

    self.minutes = () =>{
        return Math.trunc(currentSeconds/60);
    };

    self.seconds = () =>{
        return Math.trunc(currentSeconds % 60);
    };

    self.decreaseOneSecond = () =>{
        if(currentSeconds > minimumNumberOfSeconds){
            currentSeconds -= 1;
        }
    };

    self.isUp = () =>{
        return currentSeconds <= minimumNumberOfSeconds;
    };

    self.clone = () =>{
        return new Time(self.minutes(), self.seconds());
    };

    self.cloneWith = function(minutes, seconds) {
        return new Time(minutes, seconds);
    };
}

if(module && module.exports){
    module.exports = Time;
}