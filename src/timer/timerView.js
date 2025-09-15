function TimerView(){
    let self = this;

    self.subscribeToOnStartClicked = function(handler){
        if(!document.getElementById("start")){
            return;
        }
        document.getElementById("start").addEventListener('click', function(){
            handler();
        });
    }

    self.subscribeToOnStopClicked = function(handler){
        if(!document.getElementById("stop")){
            return;
        }
        document.getElementById("stop").addEventListener('click', function(){
            handler();
        });
    }

    self.subscribeToOnResetClicked = function(handler){
        if(!document.getElementById("reset")){
            return;
        }
        document.getElementById("reset").addEventListener('click', function(){
            handler();
        });
    }

    self.showTime = function(time){
        document.getElementById('minutes').innerHTML = getTwoDigitsNumber(time.getMinutes());
        document.getElementById('seconds').innerHTML = getTwoDigitsNumber(time.getSeconds());

        function getTwoDigitsNumber(number){
            return number.toString().padStart(2, '0');
        }
    }
}

if(module && module.exports){
    module.exports	= TimerView;
}