import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import TodoList from '../TodoList/TodoList';

export default class TodoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      todo: '',
      index: 0,
    };
  }

  updateTodoText = (event) => {
    this.setState({
      todo: event.target.value,
    });
  }

  addTodo = () => {
    const nextTodo = {
      id: this.state.index,
      text: this.state.todo,
    };

    this.setState({
      todos: [...this.state.todos, nextTodo],
      index: this.state.index + 1,
    });

  }

  removeTodo = (key) => {
    console.log('here');
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== key),
    });
  }

  render() {
    return (
      <div>
        <h1>TodoList</h1>
        <TextField
          onKeyDown={(event) => {
            if (event.keyCode === 13) {
              this.addTodo();
            }
          }}
          onChange={this.updateTodoText}
        />
        <TodoList
          messages={this.state.todos}
          removeTodo={this.removeTodo}
        />
      </div>
    );
  }
}
