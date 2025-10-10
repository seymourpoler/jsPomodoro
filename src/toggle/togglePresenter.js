function TogglePresenter(view, bus) {
    let showConfigurationSection = false;

    bus.publish('hideConfigurationSection');
    bus.publish('hidePresetSection');

    view.subscribeToOnShowConfigurationSectionClicked(() =>{
        if(showConfigurationSection){
            bus.publish('hideConfigurationSection');
            showConfigurationSection = false;
            return;
        }
        bus.publish('showConfigurationSection');
        showConfigurationSection = true;
    });

    view.subscribeToOnShowPresetSectionClicked(() =>{
        bus.publish('showPresetSection');
    });
}

if(module && module.exports){
    module.exports	= TogglePresenter;
}