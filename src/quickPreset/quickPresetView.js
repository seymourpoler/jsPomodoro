function QuickPresetView() {
    let self = this;

    self.subscribeToOn25MinutesClicked = (handler)=>{
        throw new Error('not implemented');
    };

    self.subscribeToOn5MinutesClicked = (handler) =>{
        throw new Error('not implemented');
    };
}


if(module && module.exports){
    module.exports	= QuickPresetView;
}