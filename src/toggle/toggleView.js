function ToggleView(){
    let self = this;

    self.subscribeToOnShowConfigurationSectionClicked = (handler) => {
        document.getElementById("toggle-configuration").addEventListener('click', () =>{
            handler();
        });
    }
}

if(module && module.exports){
    module.exports	= ToggleView;
}