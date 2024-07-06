import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerValue: 0,
    };
    this.intervalId = null;  
  }

  startTimer = () => {
    if (this.intervalId === null) {
      this.intervalId = setInterval(() => {
        this.setState((prevState) => ({
          timerValue: prevState.timerValue + 1,
        }));
      }, 1000);
    }
  };

  stopTimer = () => {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null; 
      this.setState({ timerValue: 0 });
    }
  };

  render() {
    return (
      <div>
        <div>Timer: {this.state.timerValue}</div>
        <button onClick={this.startTimer}>Start Timer</button>
        <button onClick={this.stopTimer}>Stop Timer</button>
      </div>
    );
  }
}

export default Timer;
