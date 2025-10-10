function ToggleView(){
    let self = this;

    self.subscribeToOnShowConfigurationSectionClicked = (handler) => {
        document.getElementById("toggle-configuration").addEventListener('click', () =>{
            handler();
        });
    };

    self.subscribeToOnShowPresetSectionClicked = (handler) => {
        throw new Error('Not implemented');
    };
}

if(module && module.exports){
    module.exports	= ToggleView;
}