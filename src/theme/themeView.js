function ThemeView() {
    let self = this;

    self.subscribeToDarkThemeClicked = ((handler) =>{
       document.getElementById('dark-theme').addEventListener('click', () =>{
           document.body.classList.add('dark-theme');
       });
    });

    self.subscribeToLightThemeClicked = ((handler) =>{
        document.getElementById('lignt-theme').addEventListener('click', () =>{
            document.body.classList.remove('dark-theme');
        });
    });

    self.showDark = () =>{
        throw new Error('not implemented');
    };
}

if(module && module.exports){
    module.exports	= ThemeView;
}