import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {showClock: false}
    console.log('Constructor called')
  }

  onToggleClock = () => {
    const {showClock} = this.state
    this.setState({
      showClock: !showClock,
    })
  }

  compoenetDidMount = () => {
    console.log('compoent did mount called')
  }

  render() {
    console.log('render called')
    const {showClock} = this.state
    const text = showClock ? 'Hide Clock' : 'Show Clock'
    return (
      <div className="app-container">
        <button
          type="button"
          className="toggle-button"
          onClick={this.onToggleClock}
        >
          {text}
        </button>
        {showClock && <Clock />}
      </div>
    )
  }
}

export default App
