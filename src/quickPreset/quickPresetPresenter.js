function QuickPresetPresenter(view, bus) {

    view.subscribeToOn25MinutesClicked(() =>{
        bus.publish('selectedQuickPreset', {minutes: 25, seconds: 0});
    });

    view.subscribeToOn5MinutesClicked(()=>{
        bus.publish('selectedQuickPreset', {minutes: 5, seconds: 0});
    });

    view.subscribeToOn15MinutesClicked(() =>{
        bus.publish('selectedQuickPreset', {minutes: 15, seconds: 0});
    });

    view.subscribeToOnOneAndHalfMinutesClicked(() =>{
        bus.publish('selectedQuickPreset', {minutes: 1, seconds: 30});
    });

    bus.subscribe('hidePresetSection', () =>{
        view.hide();
    });

    bus.subscribe('showPresetSection', () =>{
        view.show();
    });
}

if(module && module.exports){
    module.exports	= QuickPresetPresenter;
}