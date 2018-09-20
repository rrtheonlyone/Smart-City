import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Entypo } from '@expo/vector-icons'; 


const styles = StyleSheet.create({
  
  card: {
  	margin: 5,
  	padding: 15,
  },

  welcome: {
  	textAlign: 'center',
  	fontSize: 40,
    fontWeight: 'bold',
  	padding: 5,
    fontFamily: 'Roboto'
  },

  label: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  info: {
    marginLeft: 3,
    fontFamily: 'sans-serif-light'
  }
  
});


export default class Card extends React.Component {

  render() {

    const {address, user} = this.props;
    let name = null

    if (user && user[0].NAME) {
      name = user[0].NAME.split(" ")[0]
    }

    return (
      <View style={styles.card}>
        {name &&
        <Text style={styles.welcome}>Welcome {name}</Text>}
        
        {address &&
        <View style={styles.label}>
          <Entypo name="location-pin" size={25} color="#200947"/>
          <Text style={styles.info}>{address}</Text>
        </View>}
      </View>
    );
  }
}