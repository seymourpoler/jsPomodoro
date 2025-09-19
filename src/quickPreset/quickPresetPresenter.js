function QuickPresetPresenter(view, bus) {
    view.subscribeToOn25MinutesClicked(() =>{
        bus.publish('selectedQuickPreset', {minutes: 25, seconds: 0});
    });
}

if(module && module.exports){
    module.exports	= QuickPresetPresenter;
}