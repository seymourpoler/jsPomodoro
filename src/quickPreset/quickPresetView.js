function QuickPresetView() {
    let self = this;

    self.subscribeToOn25MinutesClicked = (handler)=>{
        document.getElementById("25minutes0seconds").addEventListener('click', () =>{
            handler();
        });
    };

    self.subscribeToOn5MinutesClicked = (handler) =>{
        document.getElementById("5minutes0seconds").addEventListener('click', () =>{
            handler();
        });
    };

    self.subscribeToOn15MinutesClicked = (handler) =>{
        document.getElementById("15minutes0seconds").addEventListener('click', () =>{
            handler();
        });
    };

    self.subscribeToOnOneAndHalfMinutesClicked = (handler) =>{
        document.getElementById("1minute30seconds").addEventListener('click', () =>{
            handler();
        });
    };

    self.hide = () =>{
        document.getElementById('presets').style.display = 'none';
    };

    self.show = () =>{
        document.getElementById('presets').style.display = 'block';
    };
}

if(module && module.exports){
    module.exports	= QuickPresetView;
}