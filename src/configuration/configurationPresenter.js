function ConfigurationPresenter(view, bus){
    const defaultMinutes = 25;
    const defaultSeconds = 0;

    view.subscribeToOnApplyChangesIsClicked(() =>{
        bus.publish('updatedConfiguration',{
          minutes: view.minutes(),
          seconds: view.seconds(),
        });
    });

    view.showTime(defaultMinutes, defaultSeconds);

    bus.subscribe('hideConfigurationSection', () => {
        view.hide();
    });

    bus.subscribe('showConfigurationSection', () => {
        view.show();
    });
}

if(module && module.exports){
    module.exports	= ConfigurationPresenter;
}