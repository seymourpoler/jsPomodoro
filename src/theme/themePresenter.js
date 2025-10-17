function ThemePresenter(view) {
    let isDarkTheme = true;

    view.subscribeToChangeThemeClicked(() =>{
        if(isDarkTheme){
            isDarkTheme = false;
            view.showLight();
            return;
        }
        isDarkTheme = true;
        view.showDark();
    });

    view.showDark();
}

if(module && module.exports){
    module.exports	= ThemePresenter;
}