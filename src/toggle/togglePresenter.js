function TogglePresenter(view, bus) {
    let showConfigurationSection = false;

    bus.publish('hideConfigurationSection');

    view.subscribeToOnShowConfigurationSectionClicked(() =>{

    });
}

if(module && module.exports){
    module.exports	= TogglePresenter;
}