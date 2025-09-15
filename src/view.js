function View(){
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
        if(!document.getElementById('minutes') || !document.getElementById('seconds')){
            return;
        }
        document.getElementById('minutes').innerHTML = time.getMinutes();
        document.getElementById('seconds').innerHTML = time.getMinutes().toString().padStart(2, '0');
    }
}

if(module && module.exports){
    module.exports	= View;
}