function TimerView(){
    let self = this;

    self.subscribeToOnStartClicked = function(handler){
        document.getElementById("start").addEventListener('click', function(){
            handler();
        });
    }

    self.subscribeToOnStopClicked = function(handler){
        document.getElementById("stop").addEventListener('click', function(){
            handler();
        });
    }

    self.subscribeToOnResetClicked = function(handler){
        document.getElementById("reset").addEventListener('click', function(){
            handler();
        });
    }

    self.showTime = function(minutes, seconds){
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