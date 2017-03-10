import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import TodoList from '../TodoList/index';

export default class TodoContainer extends Component {
  static propTypes = {
    match: React.PropTypes.object.isRequired,
  };

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
      done: false,
    };

    this.setState({
      todos: [...this.state.todos, nextTodo],
      index: this.state.index + 1,
    });
  }

  removeTodo = (key) => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== key),
    });
  }

  toggleTodo = (key) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (key === todo.id) {
          return {
            id: todo.id,
            text: todo.text,
            done: !todo.done,
          };
        }

        return todo;
      }),
    });
  }

  render() {
    const { params } = this.props.match;
    return (
      <div>
        <h1>{params.property} TodoList</h1>
        <TextField
          onKeyDown={(event) => {
            if (event.keyCode === 13) {
              this.addTodo();
            }
          }}
          onChange={this.updateTodoText}
        />
        <TodoList
          messages={this.state.todos.filter((todo) => {
            switch (params.property) {
              case 'active':
                return todo.done === false;
              case 'completed':
                return todo.done === true;
              default:
                return true;
            }
          })}
          removeTodo={this.removeTodo}
          toggleTodo={this.toggleTodo}
        />
      </div>
    );
  }
}
