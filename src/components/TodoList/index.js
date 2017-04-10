import React, { PropTypes } from 'react';
import Button from 'material-ui/Button';
import {
  List,
  ListItem,
  ListItemText,
} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import Divider from 'material-ui/Divider';

const TodoList = props => (
  <List>
    {props.messages && props.messages.map(message =>
      (
        <div>
          <ListItem key={message.id}>
            <Checkbox
              onClick={() => props.toggleTodo(message.id)}
              checked={message.done}
            />
            <ListItemText
              primary={`${message.text}`}
            />
            <Button onClick={() => props.removeTodo(message.id)}>
              Delete
            </Button>
          </ListItem>
          <Divider inset />
        </div>
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
