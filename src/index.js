import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Count extends Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0
    }
    this.interval = null
  }

  componentDidMount() {
    let count = 0
    this.interval = window.setInterval(() => {
      this.setState({ count })
      count++
    }, 1000)
  }

  render () {
    const { count } = this.state

    return <span>{ count }</span>
  }
}


class App extends Component {
  render () {
    return <h1>count: <Count /> </h1>
  }
}

const root = document.getElementById('root')

ReactDOM.render(<App />, root)
