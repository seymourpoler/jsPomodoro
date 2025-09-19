function ConfigurationPresenter(view, bus){
    const defaultMinutes = 25;
    const defaultSeconds = 0;

    let sef = this;

    view.subscribeToOnApplyChangesIsClicked(() =>{
        bus.publish('updatedConfiguration',{
          minutes: view.minutes(),
          seconds: view.seconds(),
        });
    });

    view.showTime(defaultMinutes, defaultSeconds);
}

if(module && module.exports){
    module.exports	= ConfigurationPresenter;
}