function Sound(){
    let self = this;

    self.play = () =>{
        const audio = new Audio('./timer/alarm.mp3');
        audio.play();
    };
}

if(module && module.exports){
    module.exports	= Sound;
}