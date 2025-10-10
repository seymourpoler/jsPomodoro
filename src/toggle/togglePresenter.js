function TogglePresenter(view, bus) {
    let showConfigurationSection = false;
    let showPresetSection = false;

    bus.publish('hideConfigurationSection');
    bus.publish('hidePresetSection');
    bus.publish('hideTodoSection');

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
        if(showPresetSection){
            bus.publish('hidePresetSection');
            showPresetSection = false;
            return;
        }
        bus.publish('showPresetSection');
        showPresetSection = true;
    });
}

if(module && module.exports){
    module.exports	= TogglePresenter;
}