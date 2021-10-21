import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {};    
  }

  render() {
    return (
      <View style={{...styles.view, height: this.props.height, width: this.props.width }}>
        <TouchableOpacity onPress={this.props.fn} style={styles.btn}>
          <Text style={{ fontSize: this.props.font, color: 'white' }}>{this.props.t}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  }
});

export default Item;