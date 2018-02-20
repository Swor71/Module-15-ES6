let pad0 = (value) => {
    let result = value.toString();
    if (result.length < 2) {
        result = '0' + result;
    }
    return result;
}

class Stopwatch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            running: false,
            times: {
                minutes: 0,
                seconds: 0,
                miliseconds: 0
            },
            resultsList: []
        }
    }

    lap() {
        const tmp = this.state.resultsList.slice();
        tmp.push(this.format());
        this.setState({
            resultsList: tmp
        });
        console.log(this.state.resultsList);
    }

    // lap() {
    //     this.state.resultsList.push(this.format());   
    // }


    clearLaps() {
        this.setState({
            resultsList: []
        });
    }

    resetStopwatch() {
        this.setState({
            times: {
                minutes: 0,
                seconds: 0,
                miliseconds: 0
            }
        });
    }

    format() {
        let minutes = this.state.times.minutes;
        let seconds = this.state.times.seconds;
        let miliseconds = this.state.times.miliseconds;
        return `${pad0(minutes)}:${pad0(seconds)}:${pad0(Math.floor(miliseconds))}`;
    }

    start() {
        if (!this.state.running) {
            this.setState({
                running: true
            });
            this.watch = setInterval(() => this.step(), 10);
        }
    }

    stop() {
        this.setState({
            running: false
        });
        clearInterval(this.watch);
    }

    step() {
        if (!this.state.running) return;
        this.calculate();
    }

    calculate() {
        this.setState({
            times: {
                minutes: this.state.times.minutes,
                seconds: this.state.times.seconds,
                miliseconds: this.state.times.miliseconds + 1
            }
        });
        if (this.state.times.miliseconds >= 100) {
            this.setState({
                times: {
                    minutes: this.state.times.minutes,
                    seconds: this.state.times.seconds + 1,
                    miliseconds: 0
                }
            });
        };
        if (this.state.seconds >= 60) {
            this.setState({
                times: {
                    minutes: this.state.times.minutes + 1,
                    seconds: 0,
                    miliseconds: this.state.times.miliseconds
                }
            });
        };
    }

    render() {
        return (
            <div className="container">
                <div className="stopwatch">
                    {this.format()}
                </div>
                <nav className="controls">
                    <a href="#" className="button btn-top-left" onClick={() => this.start()}> Start</a>
                    <a href="#" className="button btn-top-mid" onClick={() => this.lap()}>Lap</a>
                    <a href="#" className="button btn-top-right" onClick={() => this.stop()}>Stop</a>
                    <a href="#" className="button btn-bottom-left" onClick={() => this.resetStopwatch()}>Reset</a>
                    <a href="#" className="button btn-bottom-right" onClick={() => this.clearLaps()}>Clear Laps</a>
                </nav>
                <ResultsList results={this.state.resultsList} />
            </div>
        );
    }
}

class ResultsList extends React.Component {
    get results() {
        return this.props.results.map(element => <ListItem key={element.id} element={element} />);
    }

    render() {
        return (
            <ul className={'results'}>
                {this.results}
            </ul>
        );
    }
}

class ListItem extends React.Component {
    render() {
        return (
            <li>{this.props.element}</li>
        );
    }
}

const app = document.getElementById('app');
ReactDOM.render(<Stopwatch />, app);