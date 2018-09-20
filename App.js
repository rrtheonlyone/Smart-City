import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'

//Icons
import { Ionicons } from '@expo/vector-icons'; 

//The main page
import Navigator from './src/index'

//Store
import configureStore from './src/store/configureStore'

const store = configureStore()

export default class App extends React.Component {
  render() {
    return (
    	<Provider store={store}>
      		<Navigator/>
      	</Provider>
    );
  }
}


