// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {
    isTimerRunning: false,
    timeInSeconds: 0,
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  onResetTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false, timeInSeconds: 0})
  }

  onStopTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false})
  }

  runClock = () => {
    this.setState(prevState => ({timeInSeconds: prevState.timeInSeconds + 1}))
  }

  onStartTimer = () => {
    this.timeInterval = setInterval(this.runClock, 1000)
    this.setState({isTimerRunning: true})
  }

  getElapsedSecondsInTimeFormat = () => {
    const {timeInSeconds} = this.state
    const minutes = Math.floor(timeInSeconds / 60)
    const seconds = Math.floor(timeInSeconds % 60)
    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`

    return `${stringifiedMinutes}:${stringifiedSeconds}`
  }

  render() {
    const {isTimerRunning} = this.state
    return (
      <div className="app-container">
        <div className="stopwatch-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="timer-container">
            <div className="stop-watch-header-section">
              <img
                alt="stopwatch"
                className="timer-controller-icon"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              />
              <p className="timer-controller-label">Timer</p>
            </div>
            <h1 className="stopwatch-timer">
              {this.getElapsedSecondsInTimeFormat()}
            </h1>
            <div className="controls-container">
              <button
                className="timer-controller-btn green-bg"
                onClick={this.onStartTimer}
                type="button"
                disabled={isTimerRunning}
              >
                Start
              </button>
              <button
                className="timer-controller-btn red-bg"
                onClick={this.onStopTimer}
                type="button"
              >
                Stop
              </button>
              <button
                className="timer-controller-btn yellow-bg"
                onClick={this.onResetTimer}
                type="button"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
