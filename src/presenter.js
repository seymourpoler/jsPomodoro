const Time = require('./time');

function Presenter(view, timer){
    const time = new Time(25, 0);
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