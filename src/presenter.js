function Presenter(view, timer, time){
    view.showTime(time);

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
            view.showTime(time);
        });
    });
}

if(module && module.exports){
    module.exports	= Presenter;
}