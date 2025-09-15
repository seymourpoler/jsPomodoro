function Presenter(view, timer){
    const defaultTime = {minutes: 25, seconds: 0};
    view.showTime(defaultTime);

    view.subscribeToOnResetClicked(()=>{
        view.showTime(defaultTime);
        timer.reset();
    });

    view.subscribeToOnStopClicked(() =>{
        timer.stop();
    });

    view.subscribeToOnStartClicked(() => {
        timer.start(defaultTime, (time) =>{
            view.showTime(time);
        });
    });
}

if(module && module.exports){
    module.exports	= Presenter;
}