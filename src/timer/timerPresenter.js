function TimerPresenter(view, bus, timer, sound, time){
    let currentTime = time.clone();
    view.showTime(currentTime);

    view.subscribeToOnResetClicked(()=>{
        timer.reset();
        view.showTime(time);
        currentTime = time.clone();
    });

    view.subscribeToOnStopClicked(() =>{
        timer.stop();
    });

    view.subscribeToOnStartClicked(() => {
        timer.start(() =>{
            currentTime.decreaseOneSecond();
            view.showTime(currentTime);
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