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
      this.handleClick();
    }
  }

  handleClick = () => {
    if(this.input.current.value.trim()){
      this.props.dispatch(
      { type: "ADD_TODO",
        text: this.input.current.value,
      })
      this.input.current.value = "";
    }
  }

  handleRemove = (id) => {
    this.props.dispatch({ type: "REMOVE_TODO", id: id})
  }

  toggleTodo = (id) => {
    this.props.dispatch({ type: "TOOGLE_TODO", id: id})
  }

  render() {
    return (
      <div className="input-container">
        <h2 className="header">Todos</h2>
        <div className="todos">
          <div className="input-box">
            <input type="text" placeholder="Add your todo" ref={this.input} onKeyPress={this.handleEnter}/>
            <button onClick={this.handleClick}>Add</button>
          </div>
          <ul className="ul">
            {this.props.todo.map(todo =>
              <li className="todo-list" key={todo.id}>
                <input type="checkbox" checked = {todo.completed} onChange={() => this.toggleTodo(todo.id)}/>
                <span>{todo.text}</span>
                <button onClick={() => this.handleRemove(todo.id)}>X</button>
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

function mapState(state){
  return {
    todo: state,
  }
}

export default connect(mapState)(App)

// 