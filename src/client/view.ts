export class View {
    public subscribeWhenStartIsRequested (handler: () => void){
        document.getElementById('start')?.addEventListener('click', (event: Event) => {
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
}1