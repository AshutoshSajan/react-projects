import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  constructor(){
    super()
    this.id = 0
    this.state = {}
    this.input = React.createRef()
  }
  
  handleEnter = (e) => {
    if(e.key === "Enter" && e.target.value.trim()){
      console.log(e.target.value);
      this.handleClick();
    }
  }

  handleClick = () => {
    console.log(this.input.current.value)
    this.props.dispatch(
      { type: "ADD_TODO",
        text: this.input.current.value,
        done: false
      })

    this.input.current.value = "";
  }

  handleRemove = (e) => {
    console.log(e)
    console.log(this.props.todo)
  }

  render() {
    console.log(this.props)
    return (
      <div className="todos">
        <h2 className="header">Todos</h2>
        <div className="input-box">
          <input type="text" placeholder="Add your todo" ref={this.input} onKeyPress={this.handleEnter}/>
          <button onClick={this.handleClick}>Add</button>
        </div>
        <ul className="ul">
          {this.props.todo.map(todo =>
            // console.log(todo)
            <li className="todo-list" key={todo}>
              <input type="checkbox" onClick={""}/>
              <span key={todo}>{todo.text}</span>
              <button key={todo} onClick={this.handleRemove}>X</button>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

function mapState(state){
  console.log(state);
  return {
    todo: state,
  }
}

export default connect(mapState)(App)

// 