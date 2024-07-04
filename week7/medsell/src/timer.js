import React, { Component } from 'react';

//props pass data and event handlers from a parent component to a child component
class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerValue: 0,
    };
    this.intervalId = null;  // Store the interval ID to clear it later
  }

  startTimer = () => {
    // Only start a new interval if one doesn't already exist
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
