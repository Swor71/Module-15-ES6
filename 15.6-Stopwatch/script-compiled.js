"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var pad0 = function pad0(value) {
    var result = value.toString();
    if (result.length < 2) {
        result = '0' + result;
    }
    return result;
};

var Stopwatch = function (_React$Component) {
    _inherits(Stopwatch, _React$Component);

    function Stopwatch(props) {
        _classCallCheck(this, Stopwatch);

        var _this = _possibleConstructorReturn(this, (Stopwatch.__proto__ || Object.getPrototypeOf(Stopwatch)).call(this, props));

        _this.state = {
            running: false,
            times: {
                minutes: 0,
                seconds: 0,
                miliseconds: 0
            },
            resultsList: []
        };
        return _this;
    }

    _createClass(Stopwatch, [{
        key: "lap",
        value: function lap() {
            var tmp = this.state.resultsList.slice();
            tmp.push(this.format());
            this.setState({
                resultsList: tmp
            });
            console.log(this.state.resultsList);
        }

        // lap() {
        //     this.state.resultsList.push(this.format());   
        // }


    }, {
        key: "clearLaps",
        value: function clearLaps() {
            this.setState({
                resultsList: []
            });
        }
    }, {
        key: "resetStopwatch",
        value: function resetStopwatch() {
            this.setState({
                times: {
                    minutes: 0,
                    seconds: 0,
                    miliseconds: 0
                }
            });
        }
    }, {
        key: "format",
        value: function format() {
            var minutes = this.state.times.minutes;
            var seconds = this.state.times.seconds;
            var miliseconds = this.state.times.miliseconds;
            return pad0(minutes) + ":" + pad0(seconds) + ":" + pad0(Math.floor(miliseconds));
        }
    }, {
        key: "start",
        value: function start() {
            var _this2 = this;

            if (!this.state.running) {
                this.setState({
                    running: true
                });
                this.watch = setInterval(function () {
                    return _this2.step();
                }, 10);
            }
        }
    }, {
        key: "stop",
        value: function stop() {
            this.setState({
                running: false
            });
            clearInterval(this.watch);
        }
    }, {
        key: "step",
        value: function step() {
            if (!this.state.running) return;
            this.calculate();
        }
    }, {
        key: "calculate",
        value: function calculate() {
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
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            return React.createElement(
                "div",
                { className: "container" },
                React.createElement(
                    "div",
                    { className: "stopwatch" },
                    this.format()
                ),
                React.createElement(
                    "nav",
                    { className: "controls" },
                    React.createElement(
                        "a",
                        { href: "#", className: "button btn-top-left", onClick: function onClick() {
                                return _this3.start();
                            } },
                        " Start"
                    ),
                    React.createElement(
                        "a",
                        { href: "#", className: "button btn-top-mid", onClick: function onClick() {
                                return _this3.lap();
                            } },
                        "Lap"
                    ),
                    React.createElement(
                        "a",
                        { href: "#", className: "button btn-top-right", onClick: function onClick() {
                                return _this3.stop();
                            } },
                        "Stop"
                    ),
                    React.createElement(
                        "a",
                        { href: "#", className: "button btn-bottom-left", onClick: function onClick() {
                                return _this3.resetStopwatch();
                            } },
                        "Reset"
                    ),
                    React.createElement(
                        "a",
                        { href: "#", className: "button btn-bottom-right", onClick: function onClick() {
                                return _this3.clearLaps();
                            } },
                        "Clear Laps"
                    )
                ),
                React.createElement(ResultsList, { results: this.state.resultsList })
            );
        }
    }]);

    return Stopwatch;
}(React.Component);

var ResultsList = function (_React$Component2) {
    _inherits(ResultsList, _React$Component2);

    function ResultsList() {
        _classCallCheck(this, ResultsList);

        return _possibleConstructorReturn(this, (ResultsList.__proto__ || Object.getPrototypeOf(ResultsList)).apply(this, arguments));
    }

    _createClass(ResultsList, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "ul",
                { className: 'results' },
                this.results
            );
        }
    }, {
        key: "results",
        get: function get() {
            return this.props.results.map(function (element) {
                return React.createElement(ListItem, { key: element.id, element: element });
            });
        }
    }]);

    return ResultsList;
}(React.Component);

var ListItem = function (_React$Component3) {
    _inherits(ListItem, _React$Component3);

    function ListItem() {
        _classCallCheck(this, ListItem);

        return _possibleConstructorReturn(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).apply(this, arguments));
    }

    _createClass(ListItem, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "li",
                null,
                this.props.element
            );
        }
    }]);

    return ListItem;
}(React.Component);

var app = document.getElementById('app');
ReactDOM.render(React.createElement(Stopwatch, null), app);
