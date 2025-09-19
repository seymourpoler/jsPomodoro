function TimerPresenter(view, bus, timer, sound, time){
    let currentTime = time.clone();

    view.showTime(currentTime.minutes(), currentTime.seconds());

    view.subscribeToOnResetClicked(()=>{
        timer.reset();
        view.showTime(time.minutes(), time.seconds());
        currentTime = time.clone();
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

    bus.subscribe('updatedConfiguration', (theEvent)=>{
        view.showTime(theEvent.minutes, theEvent.seconds);
    });
}

if(module && module.exports){
    module.exports	= TimerPresenter;
}