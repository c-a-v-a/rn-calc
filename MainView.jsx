import React, { Component } from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import Item from './Item';

class MainView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calcs: '',
      result: '',
    };
  }

  write(char) {
    const latsChar = this.state.calcs.slice(-1);

    if (this.state.calcs.length === 0 && char === '-') {
      this.setState((state) => {
        return {
          calcs: `${state.calcs}${char}`,
        };
      });
      return;
    } else if ((/[^\d]/.test(latsChar) && /[^\d]/.test(char)) || (this.state.calcs.length === 0 && /[^\d]/.test(char))) return;

    this.setState((state) => {
      return {
        calcs: `${state.calcs}${char}`,
      };
    });
  }

  del() {
    this.setState(() => {
      return {
        calcs: '',
        result: '',
      };
    });
  }

  c() {
    this.setState((state) => {
      const calc = state.calcs.split('');
      calc.pop();

      return {
        calcs: calc.join(''),
      };
    });
  }

  calc() {
    try {
      const result = eval(this.state.calcs);
      this.setState(() => {
        return {
          result: result.toString(),
        };
      });
    } catch (error) {
      this.setState(() => {
        return {
          result: 'err',
        };
      });
    }
  }

  sqrt() {
    try {
      const result = Math.sqrt(parseFloat(this.state.result));

      this.setState(() => {
        return {
          result: result.toString(),
        };
      });
    } catch (error) {
      this.setState(() => {
        return {
          result: 'err',
        };
      });
    }
  }

  pow() {
    try {
      const result = Math.pow(parseFloat(this.state.result), 2);

      this.setState(() => {
        return {
          result: result.toString(),
        };
      });
    } catch (error) {
      this.setState(() => {
        return {
          result: 'err',
        };
      });
    }
  }

  sin() {
    try {
      const result = Math.sin(parseFloat(this.state.result));

      this.setState(() => {
        return {
          result: result.toString(),
        };
      });
    } catch (error) {
      this.setState(() => {
        return {
          result: 'err',
        };
      });
    }
  }

  cos() {
    try {
      const result = Math.cos(parseFloat(this.state.result));

      this.setState(() => {
        return {
          result: result.toString(),
        };
      });
    } catch (error) {
      this.setState(() => {
        return {
          result: 'err',
        };
      });
    }
  }

  render() {
    const normalButtons = [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '.',
      '0',
    ];

    const specialButtons = ['/', '*', '-', '+'];

    return (
      <View style={styles.view}>
        {/* Calculation area */}
        <View style={styles.calculation}>
          <Text
            style={
              this.props.vertical
                ? {
                    color: '#2E3440',
                    fontSize: parseInt(`${this.props.font * 2}`),
                  }
                : {
                    color: '#2E3440',
                    fontSize: parseInt(`${this.props.font * 2}`),
                  }
            }
          >
            {this.state.calcs}
          </Text>
        </View>

        {/* Result area */}
        <View style={styles.result}>
          <Text
            style={
              this.props.vertical
                ? { color: '#2E3440', fontSize: this.props.font }
                : { color: '#2E3440', fontSize: this.props.font }
            }
          >
            {this.state.result}
          </Text>
        </View>

        {/* Buttons area */}
        <View style={styles.buttons}>
          {/* Normal buttons */}
          <View style={styles.buttonsNormal}>
            {normalButtons.map((btn, index) => {
              return (
                <Item
                  t={btn}
                  height='25%'
                  width='33%'
                  key={`${btn}${index}`}
                  font={this.props.font}
                  fn={() => this.write(btn)}
                ></Item>
              );
            })}
            <Item
              t='='
              height='25%'
              width='33%'
              font={this.props.font}
              fn={() => this.calc()}
            ></Item>
          </View>

          {/* Horizontal buttons */}
          {this.props.vertical === true ? (
            <Text></Text>
          ) : (
            <View style={styles.buttonsHorizontal}>
              <Item
                t='Sqrt'
                height='25%'
                width='100%'
                font={this.props.font}
                fn={() => this.sqrt()}
              ></Item>
              <Item
                t='Pow'
                height='25%'
                width='100%'
                font={this.props.font}
                fn={() => this.pow()}
              ></Item>
              <Item
                t='Sin'
                height='25%'
                width='100%'
                font={this.props.font}
                fn={() => this.sin()}
              ></Item>
              <Item
                t='Cos'
                height='25%'
                width='100%'
                font={this.props.font}
                fn={() => this.cos()}
              ></Item>
            </View>
          )}

          {/* Special buttons */}
          <View style={styles.buttonsSpecial}>
            <Item
              t='Del'
              width='100%'
              height='16.5%'
              font={this.props.font}
              fn={() => this.del()}
            ></Item>
            <Item
              t='C'
              width='100%'
              height='16.5%'
              font={this.props.font}
              fn={() => this.c()}
            ></Item>
            {specialButtons.map((btn, index) => {
              return (
                <Item
                  t={btn}
                  width='100%'
                  height='16.5%'
                  font={this.props.font}
                  key={`${btn}${index}`}
                  fn={() => this.write(btn)}
                ></Item>
              );
            })}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'column',
  },
  calculation: {
    padding: 5,
    paddingRight: 10,
    paddingTop: StatusBar.currentHeight,
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#ECEFF4',
  },
  result: {
    padding: 5,
    paddingRight: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#D8DEE9',
  },
  buttons: {
    flex: 6,
    flexDirection: 'row',
  },
  buttonsNormal: {
    flex: 3,
    flexDirection: 'row',
    backgroundColor: '#2E3440',
    flexWrap: 'wrap',
  },
  buttonsHorizontal: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#4C566A',
  },
  buttonsSpecial: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#88C0D1',
  },
});

export default MainView;
