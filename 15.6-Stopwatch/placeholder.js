let pad0 = (value) => {
    let result = value.toString();
    if (result.length < 2) {
        result = '0' + result;
    }
    return result;
}

const ListItem = ({value}) => {
    <li>{value}</li>
};

const List = ({items}) => {
    <ul className="results">
        {
            items.map((item, id) => <ListItem key={id} value={item} />)
        }
    </ul>
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

    // lap() {
    //     const tmp = this.state.resultsList.slice();
    //     tmp.push(this.format());
    //     this.setState({
    //        resultsList: tmp
    //     });
    //     console.log(this.state.resultsList);
    // }

    lap() {
        this.state.resultsList.push(this.format());
        console.log(this.state.resultsList);    
    }


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
        if(!this.state.running) return;
        this.calculate();
    }

    // calculate() {
    //     this.setState(prevState => {
    //         prevState.miliseconds + 1;
    //         if (this.prevState.times.miliseconds >= 100) {
    //             this.prevState.times.seconds += 1;
    //             this.prevState.times.miliseconds = 0;
    //         }
    //         if (this.prevState.times.seconds >= 60) {
    //             this.prevState.times.minutes += 1;
    //             this.prevState.times.seconds = 0;
    //         }
    //         return prevState;
    //     });
    // }

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
        const {resultsList} = this.state;
        return (
            <div className="container">
                <div className="stopwatch">
                    {this.format()}
                </div>
                <nav className="controls">
                    <a href="#" className="button" onClick={() => this.start()}> Start</a>
                    <a href="#" className="button" onClick={() => this.lap()}>Lap</a>
                    <a href="#" className="button" onClick={() => this.stop()}>Stop</a>
                    <br />
                    <br />
                    <a href="#" className="button" onClick={() => this.resetStopwatch()}>Reset</a>
                    <a href="#" className="button" onClick={() => this.clearLaps()}>Clear Laps</a>
                </nav>
                <List items={resultsList} />
            </div>          
        );
    }
}


// class Results extends React.Component {
//     constructor(props) {
//         super(props);
//     }
    
//     // static propTypes = {
//     //     resultsList: React.PropTypes.array.isRequired
//     // }

//     render() {
//         return (this.props.results.map((element, index) => {
//             <li key={index}>
//                 {element}
//             </li>
//             })
//         );
//     }
// } 
            
const app = document.getElementById('app');
ReactDOM.render(<Stopwatch />, app);