function Presenter(view, timer){

    view.showTime({minutes: 25, seconds: 0});

    view.subscribeToOnResetClicked(()=>{
        view.showTime({minutes: 25, seconds: 0});
        timer.reset();
    });

    view.subscribeToOnStopClicked(() =>{
        timer.stop();
    });
}



if(module && module.exports){
    module.exports	= Presenter;
}