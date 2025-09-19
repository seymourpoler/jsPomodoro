let jsPomodoro = {};
jsPomodoro.ApplicationName = "Pomodoro";
jsPomodoro.version = "0.0.1";
jsPomodoro.Timer = {};
jsPomodoro.Configuration = {}

const bus = new Bus();

const timerView = new TimerView();
const timer = new Timer();
const sound = new Sound();
const time = new Time(25,0);
new TimerPresenter(timerView, bus, timer, sound, time);

const configurationView = new ConfigurationView();
new ConfigurationPresenter(configurationView, bus);

console.log('it works');
