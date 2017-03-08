import React from 'react';
import Text from 'material-ui/Text';
import Button from 'material-ui/Button';
import {
  List,
  ListItem,
  ListItemText,
} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';

const TodoList = props => (
  <List>
    {props.messages && props.messages.map(message =>
      (
        <ListItem key={message.id}>
          <Checkbox
            onClick={() => {
              props.toggleTodo(message.id)
            }}
          />
          <ListItemText
            primary={`${message.text} ${message.done ?
              'Completed' : 'Active'}`}
          />
          <Button
            onClick={() => {
              props.removeTodo(message.id);
            }}
          >
            Delete
          </Button>
        </ListItem>
      ))}
  </List>
);

export default TodoList;
