function ConfigurationView(){
    let self = this;

    self.subscribeToOnApplyChangesIsClicked = (handler) =>{
        throw new Error('not implemented');
    };

    self.minutes = () => {
        throw new Error('not implemented');
    };

    self.seconds = () => {
        throw new Error('not implemented');
    };
}

if(module && module.exports){
    module.exports	= ConfigurationView;
}