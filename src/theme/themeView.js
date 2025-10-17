function ThemeView() {
    let self = this;

    self.subscribeToChangeThemeClicked = ((handler) =>{
       document.getElementById('theme').addEventListener('click', () =>{
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