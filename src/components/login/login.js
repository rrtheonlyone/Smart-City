import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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


export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Profile Page</Text>
      </View>
    );
  }
}

