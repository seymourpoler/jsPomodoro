function ThemePresenter(view) {
    view.subscribeToDarkThemeClicked(() =>{
        view.showDark();
    });

    view.subscribeToLightThemeClicked(() =>{
        view.showLight();
    });

    view.showDark();
}

if(module && module.exports){
    module.exports	= ThemePresenter;
}