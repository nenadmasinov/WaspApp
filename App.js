import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Login from './components/login';

export default class App extends Component {
  componentDidMount(){
      SplashScreen.hide();
  }

  render() {
    // return (
    //   <View style={styles.container}>
    //
    //   </View>
    // )

    return <Login />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#000000'
  },
  instructions: {
    textAlign: 'center',
    color: '#000000',
    marginBottom: 5,
  },
});
