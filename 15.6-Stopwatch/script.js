class Stopwatch {
    constructor(display) {
        this.running = false;
        this.display = display;
        this.resetStopwatch();
        this.print(this.times);
    }
    resetStopwatch() {
        this.times = {
            minutes: 0,
            seconds: 0,
            miliseconds: 0
        };
        this.display.innerText = this.format(this.times);
        lapCounter = 0;
    }
    print() {
        this.display.innerText = this.format(this.times);
    }
    
    
    step() {
        if (!this.running) return;
        this.calculate();
        this.print();
    }
}

function pad0(value) {
    let result = value.toString();
    if (result.length < 2) {
        result = '0' + result;
    }
    return result;
}

const stopwatch = new Stopwatch(
    document.querySelector('.stopwatch')
);

const startButton = document.getElementById('start');
startButton.addEventListener('click', () => stopwatch.start());

const stopButton = document.getElementById('stop');
stopButton.addEventListener('click', () => stopwatch.stop());

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () => stopwatch.resetStopwatch());

let resultsList = document.querySelector('.results');

const lap = document.getElementById('lap');
let lapCounter = 0;
lap.addEventListener('click', () => {lapCounter++; stopwatch.lap(lapCounter)});

const clearLaps = document.getElementById('clearLaps');
clearLaps.addEventListener('click', () => stopwatch.clearLaps());

const app = document.getElementById('app');
ReactDOM.render(<Stopwatch />, app);