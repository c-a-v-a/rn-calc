import React, { Component } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import MainView from './MainView';

class App extends Component {
  constructor(props) {
    let dimensions = Dimensions.get('screen');
    super(props);
    this.state = {
      vertical: true,
      font: parseInt(`${dimensions.width / 15}`),
    };
  }

  isVertical() {
    let dimensions = Dimensions.get('screen');
    return dimensions.height >= dimensions.width;
  }

  setFont() {
    let dimensions = Dimensions.get('screen');

    if (this.state.vertical) {
      this.setState((state) => {
        return {
          font: parseInt(`${dimensions.width / 15}`),
        }
      })
    } else {
      this.setState((state) => {
        return {
          font: parseInt(`${dimensions.height / 15}`),
        }
      })
    }
  }

  render() {
    Dimensions.addEventListener('change', () => {
      this.setState({
        vertical: this.isVertical(),
      });
      this.setFont();
    });

    return <MainView vertical={this.state.vertical} font={this.state.font}></MainView>;
  }
}

export default App;
