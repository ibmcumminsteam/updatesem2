/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';

import {
  AppRegistry
} from 'react-native';

import Login from './Login';
import Secured from './Secured';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TextInput,
  View,
  Text,
  StatusBar,
  // Button,
  Dimensions,
  Image,
  NativeAppEventEmitter,
} from 'react-native';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
function Separator() {
  return <View style={styles.separator} />;
}


class LoginMain extends React.Component{
    static navigationOptions = {  
        title: 'LoginMain',  
   };
  state = {
    isLoggedIn: false
  }

  render() {
     
    // return <Login/>;
    if (this.state.isLoggedIn) 
      return <Secured 
          onLogoutPress={() => this.setState({isLoggedIn: false})} style={{paddingTop: 100}}
        />;
    else 
      return <Login 
          onLoginPress={() => this.setState({isLoggedIn: true})} style={{paddingTop: 100}}
        />;
  }

  
};

AppRegistry.registerComponent(LoginMain , () => LoginMain );


const styles = StyleSheet.create({
  col1:{
    backgroundColor: '#D3D3D3',
    marginBottom: 15,
    
  },
  iconss:{
  paddingLeft: 8,
  width: 100,
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start'
  },
  submit:{},
  serverTable:{
      paddingTop: 30,
      paddingLeft: 15,
      paddingRight: 15,
      // paddingBottom: -12,
      
      // backgroundColor: 'red',
  },
  subhead: {
    fontSize: 20,
    // backgroundColor: '#D3D3D3',
    paddingBottom: 30,
    paddingLeft: 10,
    
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginLeft: 2
  }
});

export default LoginMain;
