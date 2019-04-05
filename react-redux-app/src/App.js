import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  state = {
    todoInput:"",
  }

  handleChange = (e) => {
    this.setState({todoInput: e.target.value})
  }

  handleClick = () => {
    if (this.state.todoInput.trim()) {
      this.props.dispatch({type: "ADD_TODO", name: this.state.todoInput})
      this.setState({todoInput: ""})
    }
  }

  handleEnter = (e) => {
    if(e.key === "Enter" && this.state.todoInput.trim()){
      this.handleClick()
    }
  }

  handleDelete = (id) => {
    this.props.dispatch({type: "REMOVE_TODO", id: id})
  }

  toggleTodo = (id) => {
    this.props.dispatch({type: "TOGGLE_TODO", id: id})
  }

  render() {
    return (
      <div className="main">
        <h2 className="header">TODOS</h2>
        <div className="todo-container">
          <div className="input-box">
            <input type="text" name="input" value={this.state.todoInput} onChange={this.handleChange} onKeyPress={this.handleEnter} />
            <button className="add-btn" onClick={this.handleClick}>Add</button>
          </div>
          <ul>
            {
              this.props.todo.map(todo => {
                return (
                  <li className="list" key={todo.id}>
                    <input type="checkbox" checked={todo.isDone} onChange={() => this.toggleTodo(todo.id)}/>
                    <p>{todo.name}</p>
                    <button onClick={() => this.handleDelete(todo.id)}>X</button>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

function mapToState (state) {
  return {
    todo: state,
  } 
}
export default connect(mapToState)(App)
