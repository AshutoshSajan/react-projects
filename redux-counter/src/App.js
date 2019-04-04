import React, { Component } from 'react';
import './App.css';
import Button from './Button'

export default class App extends Component {

  componentDidMount = () => {
    this.props.counter.subscribe(() => this.forceUpdate())
  }

  // update = () => {
  //   console.log("call", this.props.counter.getState())
  //   return this.props.counter.getState()
  // }

  render() {
    const {counter} = this.props
    return (
      <div className="App">
        <p >{counter.getState()}</p>
        <Button type={"submit"} dispatch={() => counter.dispatch({type: "INC"})} children={counter.children} update={this.update}>
          inc
        </Button>
        <Button type={"submit"} dispatch={() => counter.dispatch({type: "DEC"})} children={counter.children} update={this.update}>
          dec
        </Button>
        <Button type={"submit"} dispatch={() => counter.dispatch({type: "RESET"})} children={counter.children} update={this.update}>
          Reset
        </Button>
      </div>
    );
  }
}
