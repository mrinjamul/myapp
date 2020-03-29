import React, {Component} from "react"

import "./App.css"

class App extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.handleIncrease = this.handleIncrease.bind(this)
        this.handleDecrease = this.handleDecrease.bind(this)
        this.handleReset = this.handleReset.bind(this)
    }

    handleIncrease() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }

    handleDecrease() {
        this.setState(prevState => {
            return {
                count: prevState.count !== 0 ? prevState.count - 1 : prevState.count =0
            }
        })
    }

    handleReset() {
      this.setState({ count: 0 })
    }

    render() {
        return (
            <div className="App">
                <h1>{this.state.count}</h1>
                <div className="button-class">
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleReset}>Reset</button>
                <button onClick={this.handleDecrease}>-</button>
                </div>
            </div>
        )
    }
}

export default App
