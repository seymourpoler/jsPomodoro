function TimerPresenter(view, timer){
    let configuredTime = time;
    let currentTime = time.clone();

    view.showTime(currentTime.minutes(), currentTime.seconds());

    view.subscribeToOnResetClicked(()=>{
        timer.reset();
        currentTime = configuredTime.clone();
        view.showTime(currentTime.minutes(), currentTime.seconds());
    });

    view.subscribeToOnStopClicked(() =>{
        timer.stop();
    });

    view.subscribeToOnStartClicked(() => {
        timer.start(() =>{
            currentTime.decreaseOneSecond();
            view.showTime(currentTime.minutes(), currentTime.seconds());
            if(currentTime.isUp()){
                sound.play();
                timer.stop();
            }
        });
    });
}

if(module && module.exports){
    module.exports	= TimerPresenter;
}