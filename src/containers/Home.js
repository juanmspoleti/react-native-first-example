import React from 'react';
import { StyleSheet, Text, View, Button, Alert, ToastAndroid, Image } from 'react-native';
import { AppRegistry, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { counterIncrement, counterDecrement, counterClear, counterSet, helloActions } from '../actions';
import { createStore } from 'redux';
import reducers from '../reducers';
import SecondPage from './SecondPage';
import { Provider } from 'react-redux';

const store = createStore(reducers);

class Home extends React.Component {


  _onPress() {
    Alert.alert('Alert Title',
    'My Alert Msg',
    [
      { text: 'Ask me later', onPress: () => ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT), },
      { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel', },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ],
    { cancelable: false });
  }

  onChangeText(number) {
    const count = parseInt(number);
    this.props.counterSet(count);
  }

  constructor(props) {
    super(props);
    this.state = { text: 'Ingrese algo:' };
    this.state = { count: 0 };
    this.onChangeText = this.onChangeText.bind(this);
    this._onPress = this._onPress.bind(this);
  }

  render() {
    console.log(this.props);
    const { helloText } = this.props.hello;
    const { pressedButton } = this.props.hello;
    return (
      <View style={styles.container}>

        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text}
        />
        <Image
          style={{ width: 50, height: 50 }}
          source={{ uri: 'http://www.pvhc.net/img122/trwqqlffaacqobjxdioi.png' }}
        />
        
        <TextInput
          style={{ width: 40, height: 40, borderWidth: 1 }}
          onChangeText={this.onChangeText}
          value={this.props.count.toString()}
        />

        <View style={styles.countViewStyle}>
          <Button onPress={this.props.counterIncrement} title="+" />
          <Text style={styles.welcome}>
            {this.props.count}
          </Text>

          <Button onPress={this.props.counterDecrement} title="-" />

          <Button onPress={this.props.counterClear} title="Clear" />

        </View>
        <Text>
          {helloText}
          </Text>

          <Text>
          Did you press the button? {pressedButton.toString()}
          </Text>

          <Button onPress={ <Provider store={store}>
        <SecondPage />
          </Provider>
    } title='Show the magic!' />

          <Button
          onPress={this._onPress}
          title="Learn More"
          color="#141584"
          accessibilityLabel="Learn more about this purple button"
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  countViewStyle: {
    flexDirection: "row"
  }
});

function mapStateToProps(state) {
  return {
    count: state.counter,
    hello: state.hello
  };
}

export default connect(mapStateToProps, { counterIncrement, counterDecrement, counterClear, counterSet, helloActions })(Home);