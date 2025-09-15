function Presenter(view, timer, time){
    let currentTime = time;
    view.showTime(currentTime);

    view.subscribeToOnResetClicked(()=>{
        view.showTime(time);
        timer.reset();
    });

    view.subscribeToOnStopClicked(() =>{
        timer.stop();
    });

    view.subscribeToOnStartClicked(() => {
        timer.start( () =>{
            time.decreaseOneSecond();
            view.showTime(currentTime);
        });
    });
}

if(module && module.exports){
    module.exports	= Presenter;
}