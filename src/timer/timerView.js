function TimerView(){
    let self = this;

    self.subscribeToOnStartClicked = (handler) =>{
        document.getElementById("start").addEventListener('click', () =>{
            handler();
        });
    }

    self.subscribeToOnStopClicked = (handler) =>{
        document.getElementById("stop").addEventListener('click', () =>{
            handler();
        });
    }

    self.subscribeToOnResetClicked = (handler) =>{
        document.getElementById("reset").addEventListener('click', () =>{
            handler();
        });
    }

    self.showTime = (minutes, seconds)  =>{
        document.getElementById('minutes').innerHTML = getTwoDigitsNumber(minutes);
        document.getElementById('seconds').innerHTML = getTwoDigitsNumber(seconds);

        function getTwoDigitsNumber(number){
            return number.toString().padStart(2, '0');
        }
    }
}

if(module && module.exports){
    module.exports	= TimerView;
}