function ThemePresenter(view) {
    view.subscribeToDarkThemeClicked(() =>{
        throw new Error('not implemented');
    });

    view.subscribeToLightThemeClicked(() =>{
        throw new Error('not implemented');
    });

    view.showDark();
}

if(module && module.exports){
    module.exports	= ThemePresenter;
}