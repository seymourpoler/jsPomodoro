const view = new View();
const timer = new Timer();
const sound = new Sound();
const time = new Time(25,0);
new Presenter(view, timer, sound, time);

console.log('it works');
