import React from 'react';
import Text from 'material-ui/Text';
import Button from 'material-ui/Button';
import List from 'material-ui/List';

const TodoList = props => (
  <List>
    {props.messages && props.messages.map((message, index) =>
      (
        <div key={message.id}>
          <Text>{message.text}</Text>
          <Button
            onClick={() => {
              props.removeTodo(message.id);
            }}
          >
            Delete
          </Button>
        </div>
      ))}
  </List>
);

export default TodoList;
