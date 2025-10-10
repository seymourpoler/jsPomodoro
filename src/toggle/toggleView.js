function ToggleView(){
    let self = this;

    self.subscribeToOnShowConfigurationSectionClicked = (handler) => {
        document.getElementById("toggle-configuration").addEventListener('click', () =>{
            handler();
        });
    };

    self.subscribeToOnShowPresetSectionClicked = (handler) => {
        document.getElementById("toggle-presets").addEventListener('click', () =>{
            handler();
        });
    };

    self.subscribeToOnShowTodoSectionClicked = (handler) => {
        document.getElementById("toggle-todo").addEventListener('click', () =>{
            handler();
        });
    };
}

if(module && module.exports){
    module.exports	= ToggleView;
}