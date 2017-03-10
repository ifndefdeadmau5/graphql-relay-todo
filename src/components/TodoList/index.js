import React, { PropTypes } from 'react';
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
            onClick={() => props.toggleTodo(message.id)}
            checked={message.done}
          />
          <ListItemText
            primary={`${message.text} ${message.done ?
              'Completed' : 'Active'}`}
          />
          <Button onClick={() => props.removeTodo(message.id)}>
            Delete
          </Button>
        </ListItem>
      ))}
  </List>
);

TodoList.propTypes = {
  messages: PropTypes.array,
};

TodoList.defaultProps = {
  messages: [],
};

export default TodoList;
