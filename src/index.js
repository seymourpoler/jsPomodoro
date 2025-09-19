let jsPomodoro = {};
jsPomodoro.ApplicationName = "Pomodoro";
jsPomodoro.version = "0.0.1";
jsPomodoro.Timer = {};
jsPomodoro.Configuration = {}

const bus = new Bus();

const configurationView = new ConfigurationView();
new ConfigurationPresenter(configurationView, bus);

const timerView = new TimerView();
const timer = new Timer();
const sound = new Sound();
const time = new Time(25,0);
new TimerPresenter(timerView, bus, timer, sound, time);

console.log('it works');
