function TogglePresenter(view, bus) {
    let showConfigurationSection = false;

    bus.publish('hideConfigurationSection');

    view.subscribeToOnShowConfigurationSectionClicked(() =>{
        bus.publish('showConfigurationSection');
    });
}

if(module && module.exports){
    module.exports	= TogglePresenter;
}