import React, { Component } from 'react';
import injectSheet from 'react-jss';
import styles from './style';

@injectSheet(styles)
class Header extends Component {
  render() {
    const { classes } = this.props;
    return (
      <h1 className={classes.h1}>relay todos</h1>
    )
  }
}

export default Header;
