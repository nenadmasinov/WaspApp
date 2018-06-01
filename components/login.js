import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
  AsyncStorage,
  ScrollView
} from 'react-native';
import Header from './header';

export default class Login extends Component {
  constructor(props){
      super(props);
      this.state = {
        username: "",
        password: ""
      };
  }

  render() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
          <KeyboardAvoidingView style={styles.container} enabled>
            <Header />
            <View style={styles.holderBox}>
                <View style={styles.imageHolderBox}>
                    <Image source={require('../assets/wasp.png')}
                          style={styles.image}/>
                </View>
                <TextInput style={styles.inputCnt}
                           underlineColorAndroid='transparent'
                           placeholder="username or email"
                           placeholderTextColor="#fff"
                           onSubmitEditing={() => this.passwordInput.focus()}
                           keyboardType="email-address"
                           autoCapitalize="none"
                           autoCorrect={false}
                           onChangeText={(username) => this.setState({username: username})}
                           returnKeyType="next"/>
                <TextInput style={styles.inputCnt}
                           underlineColorAndroid='transparent'
                           secureTextEntry
                           placeholder="password"
                           returnKeyType="go"
                           onChangeText={(password) => this.setState({password: password})}
                           ref={(input) => this.passwordInput = input}
                           placeholderTextColor="#fff"/>
                <TouchableOpacity style={styles.loginBtn}
                                  onPress={this._loginClick.bind(this)}>
                    <Text style={styles.loginBtnText}>Login</Text>
                </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
    );
  }

  checkUsername() {
    if(this.state.username == "")
      {
        Alert.alert('Error',
                    'Please enter username!',
                    [ {text: 'OK' } ],
                    { cancelable: false }
              )
         return false;
    }

    return true;
  }

  checkPassword() {
    if(this.state.password == "")
      {
        Alert.alert('Error',
                    'Please enter password!',
                    [ {text: 'OK' } ],
                    { cancelable: false }
              )
         return false;
    }

    return true;
  }

  async _loginClick() {
    let userNameExists = this.checkUsername();
    if(!userNameExists) return;

    let passwordExists = this.checkPassword();
    if(!passwordExists) return;

    try {
      let user = {
        username: this.state.username,
        password: this.state.password
      }
      await AsyncStorage.setItem('user', JSON.stringify(user));
      this.props.userLoggedIn(true);
    } catch (error) {
      Alert.alert('Error',
                  error,
                  [ {text: 'OK' } ],
                  { cancelable: false }
            )
    }
  }

}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff'
    },
  imageHolderBox:{
      alignItems: 'center',
      marginBottom: 20
    },
  holderBox: {
      flex: 1,
      padding: 30,
      alignItems: 'stretch',
      justifyContent: 'flex-end',
    },
  inputCnt: {
      height: 40,
      marginBottom: 20,
      color: "#FFF",
      paddingHorizontal: 10,
      backgroundColor: "#74b9ff",
      borderRadius: 3
    },
  loginBtn: {
      height: 40,
      marginBottom: 20,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: "#0984e3",
      paddingHorizontal: 10,
      borderRadius: 3
    },
  loginBtnText: {
      color: "#fff",
      fontSize: 18,
      fontWeight: "bold"
    },
  image:{
      width: 150,
      height: 150
    }
});
