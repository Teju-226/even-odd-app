import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({
      count: prevState.count + Math.ceil(Math.random() * 100),
    }))
  }

  render() {
    const {count} = this.state
    const name=count%2===0?"Even":"Odd";

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="count">Count {count}</h1>
          <p className="name">Count is {name}</p>
          <button type="button" className="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p>*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
