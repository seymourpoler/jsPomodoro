function ConfigurationPresenter(view, bus){
    let sef = this;

    view.subscribeToOnApplyChangesIsClicked(() =>{
        bus.publish('updatedConfiguration',{
          minutes: view.minutes(),
          seconds: view.seconds(),
        });
    });

    view.showTime(25, 0);
}

if(module && module.exports){
    module.exports	= ConfigurationPresenter;
}