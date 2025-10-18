function TimerPresenter(view, timer){

    view.showTime(timer.time());

    view.subscribeToOnResetClicked(()=>{
        timer.reset();
        view.showTime(timer.time());
    });

    view.subscribeToOnStopClicked(() =>{
        timer.stop();
    });

    view.subscribeToOnStartClicked(() => {
        timer.onStart(() =>{
            view.showTime(timer.time());
        });
    });
}

if(module && module.exports){
    module.exports	= TimerPresenter;
}