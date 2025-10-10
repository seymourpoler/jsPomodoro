function ThemeView() {
    let self = this;

    self.subscribeToDarkThemeClicked = ((handler) =>{
       document.getElementById('dark-theme').addEventListener('click', () =>{
           handler();
       });
    });

    self.subscribeToLightThemeClicked = ((handler) =>{
        document.getElementById('light-theme').addEventListener('click', () =>{
            handler();
        });
    });

    self.showDark = () =>{
        document.body.classList.add('dark-theme');
    };

    self.showLight = () =>{
        document.body.classList.remove('dark-theme');
    };
}

if(module && module.exports){
    module.exports	= ThemeView;
}