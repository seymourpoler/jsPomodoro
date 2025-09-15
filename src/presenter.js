function Presenter(view, timer, time){
    let currentTime = Object.assign(Object.create(Object.getPrototypeOf(time)), time);
    view.showTime(currentTime);

    view.subscribeToOnResetClicked(()=>{
        timer.reset();
        view.showTime(time);
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