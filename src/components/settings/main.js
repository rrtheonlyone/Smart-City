import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';

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

export default class Settings extends React.Component {
  render() {
    return (
	     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen</Text>
        </View>
    );
  }
}

