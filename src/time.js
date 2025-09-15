function Time(minutes, seconds){
    let self = this;

    let currentSeconds = (minutes*60) + seconds;

    self.getMinutes = function(){
        return Math.trunc(currentSeconds/60);
    };

    self.getSeconds = function(){
        return Math.trunc(currentSeconds % 60);
    };

    self.decreaseOneSecond = function(){
        currentSeconds -= 1;
    };
}

if(module && module.exports){
    module.exports = Time;
}