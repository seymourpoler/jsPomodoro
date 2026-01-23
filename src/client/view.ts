export class View {

    public subscribeWhenStartIsRequested (handler: () => void):void{
        document.getElementById('start')?.addEventListener('click', (event: Event) => {
            event.preventDefault();

            handler();
        });
    }

    public subscribeWhenPauseIsRequested(handler: () => void):void{
        document.getElementById('pause')?.addEventListener('click', (event: Event) => {
            event.preventDefault();

            handler();
        });
    }

    public subscribeWhenResetIsRequested(handler: () => void):void{
        document.getElementById('reset')?.addEventListener('click', (event: Event) => {
            event.preventDefault();

            handler();
        });
    }

    public subscribeWhenChangeThemeIsRequested(handler: () => void):void{
        document.getElementById('theme-toggle')?.addEventListener('click', (event: Event) => {
            event.preventDefault();

            handler();
        });
    }

    public subscribeWhenShowSettingsIsRequested(handler: () => void):void{
        document.getElementById('settings')?.addEventListener('click', (event: Event) => {
            event.preventDefault();

            handler();
        });
    }

    public showTime(minutes: number, seconds: number){
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');

        if (minutesEl) minutesEl.innerHTML = getTwoDigitsNumber(minutes);
        if (secondsEl) secondsEl.innerHTML = getTwoDigitsNumber(seconds);

        function getTwoDigitsNumber(value: number): string{
            return value.toString().padStart(2, '0');
        }
    }

    public changeTheme(){
        const themeToggle = document.getElementById('theme-toggle');
        const body = document.body;
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
            body.classList.add('dark');
            if (themeToggle) themeToggle.textContent = '☀️';
        }
        body.classList.toggle('dark');
        const isDark = body.classList.contains('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');

        if(themeToggle) themeToggle.textContent = isDark ? '☀️' : '🌙';
    }

    public showSettings(): void{}
}