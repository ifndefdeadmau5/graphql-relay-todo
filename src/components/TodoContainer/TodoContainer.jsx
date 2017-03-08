import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

export default class TodoContainer extends Component {
  constructor(props) {
    super(props);
    this.todos = [];
    this.todo = null;
  }

  updateMessage = (event) => {
    this.setState({
      todo: event.target.value,
    });
  }

  submitMessage = () => {
    this.setState({
      todos: [...this.state.todos, this.state.todo],
    });
  }

  render() {
    return (
      <div>
        <h1>TodoList</h1>
        <TextField
          onKeyDown={(event) => {
            if (event.keyCode === 13) {
              this.submitMessage();
            }
          }}
          onChange={this.updateMessage}
        />
      </div>
    );
  }
}
