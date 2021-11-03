import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0, name: 'Even'}

  onIncrement = () => {
    this.setState(prevState => ({
      count: prevState.count + Math.ceil(Math.random() * 100),
    }))
    const {count} = this.state
    if (count % 2 === 0) {
      this.setState({name: 'Even'})
    } else {
      this.setState({name: 'Odd'})
    }
  }

  render() {
    const {count, name} = this.state

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">
            Count <span className="count">{count}</span>
          </h1>
          <p className="para">
            Count is
            <span className="name"> {name}</span>
          </p>
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
