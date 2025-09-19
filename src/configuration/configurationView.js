function ConfigurationView(){
    let self = this;

    self.subscribeToOnApplyChangesIsClicked = function(handler){
        throw new Error('not implemented');
    };

    self.minutes = function()  {
        throw new Error('not implemented');
    };

    self.seconds = function() {
        throw new Error('not implemented');
    };
}

if(module && module.exports){
    module.exports	= ConfigurationView;
}