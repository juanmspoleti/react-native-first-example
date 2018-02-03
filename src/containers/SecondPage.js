import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { AppRegistry } from 'react-native';
import { connect } from 'react-redux';

class SecondPage extends React.Component {
render() {
    return (
      <View style={styles.container}>

        <Text
          Segunda pagina desplegada
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
