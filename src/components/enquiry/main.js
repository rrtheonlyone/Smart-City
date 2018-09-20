import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, ImageBackground } from 'react-native';

import { createStackNavigator } from 'react-navigation';
import { GiftedChat } from 'react-native-gifted-chat'

import Example from './test.js'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
  	backgroundColor: 'skyblue',
  	padding: 15,
  },
  title: {
  	textAlign: 'center',
  	color: 'white',
  }
});

class Enquiry extends React.Component {

  static navigationOptions = {
    title: 'Enquiry',
    headerStyle: {
      backgroundColor: '#2d4059',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {
    return (
	     <ImageBackground source={require('../../assets/images/Background2.png')} style={styles.container}>
          <Example/>
          <KeyboardAvoidingView behavior={'padding'} keyboardVerticalOffset={80}/>
      </ImageBackground>
    );
  }
}

export default createStackNavigator(
  {
    Enquiry: Enquiry
  }
)