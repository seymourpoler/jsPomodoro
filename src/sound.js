function Sound(){
    let self = this;

    self.play = function(){
        const audio = new Audio('./alarm.mp3');
        audio.play();
    };
}

if(module && module.exports){
    module.exports	= Sound;
}