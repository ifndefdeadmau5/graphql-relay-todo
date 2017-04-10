import React, { Component } from 'react';
import Relay from 'react-relay';
import TextField from 'material-ui/TextField';
import TodoList from '../TodoList/index';

class TodoContainer extends Component {
  static propTypes = {
    params: React.PropTypes.object.isRequired,
    viewer: React.PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      todo: '',
      index: 0,
    };

    console.log(props)
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
    const { params } = this.props;
    return (
      <div>
        <TextField
          label="What needs to be done?"
          onKeyDown={(event) => {
            if (event.keyCode === 13) {
              this.addTodo();
            }
          }}
          onChange={this.updateTodoText}
        />
        <p>
          {`Your viewer id is: ${this.props.viewer.id}`}
        </p>
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

export default Relay.createContainer(
  TodoContainer,
  {
    fragments: {
      viewer: () => Relay.QL`
          fragment on Viewer{
              id
          }
      `,
    },
  },
);
