const view = new View();
const timer = new Timer();
const timeFactory = new Time(25,0);
new Presenter(view, timer, timeFactory);

console.log('it works');
