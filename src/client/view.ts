export class View {
    public subscribeWhenStartIsRequested (handler: () => void){
        document.getElementById('start')?.addEventListener('click', (event: Event) => {
            event.preventDefault();

            handler();
        });
    }

    public showTime(minutes: number, seconds: number){
        document.getElementById('minutes')?.innerHTML = getTwoDigitsNumber(minutes);
        document.getElementById('seconds')?.innerHTML = getTwoDigitsNumber(seconds);

        function getTwoDigitsNumber(value: number): string{
            return value.toString().padStart(2, '0');
        }
    }
}