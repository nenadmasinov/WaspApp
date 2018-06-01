import React, { Component } from 'react';
import { StatusBar } from 'react-native';

export default class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <StatusBar backgroundColor="#000000" barStyle="light-content" />
    );
  }
}
