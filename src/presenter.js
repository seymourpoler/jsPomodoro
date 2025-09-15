function Presenter(view, timer, time){
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
        timer.start( () =>{
            currentTime.decreaseOneSecond();
            view.showTime(currentTime);
        });
    });
}

if(module && module.exports){
    module.exports	= Presenter;
}