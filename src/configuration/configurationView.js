function ConfigurationView(){
    let self = this;

    self.subscribeToOnApplyChangesIsClicked = (handler) =>{
        document.getElementById("apply-config").addEventListener('click', function(){
            handler();
        });
    };

    self.minutes = () => {
        return parseInt(document.getElementById('config-minutes').value);
    };

    self.seconds = () => {
        return parseInt(document.getElementById('config-seconds').value);
    };

    self.showTime = function(minutes, seconds){
        document.getElementById('config-minutes').innerHTML = getTwoDigitsNumber(minutes);
        document.getElementById('config-seconds').innerHTML = getTwoDigitsNumber(seconds);

        function getTwoDigitsNumber(number){
            return number.toString().padStart(2, '0');
        }
    }

    self.hide = () =>{
        document.getElementById('configuration').style.display = 'none';
    };

    self.show = () =>{
        document.getElementById('configuration').style.display = 'block';
    };
}

if(module && module.exports){
    module.exports	= ConfigurationView;
}