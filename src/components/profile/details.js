import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { Card, Avatar } from 'react-native-material-ui';
import { FontAwesome } from '@expo/vector-icons'; 

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  header: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    margin: 5,
    textAlign: 'center',
    color: 'white'
  },

  detail: {
  	fontSize: 15,
    fontFamily: 'sans-serif-light',
    textAlign: 'center',
    color: 'white'
  }
});

export default class UserDetails extends React.Component {
  render() {
    const {user} = this.props

    return (
        <View style={{backgroundColor: '#334966', padding: 10}}>
          <FontAwesome name='user' color='white' size={45} style={{alignSelf: 'center', margin: 5}}/>
          <Text style={styles.header}>{user.NAME}, {user.AGE}</Text>
          <Text style={styles.detail}>{user.GENDER}</Text>
          <Text style={styles.detail}>{user.ADDRESS}</Text>
          <Text style={styles.detail}>{user.PHONE}</Text> 

          <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <FontAwesome name='facebook-square' color='white' size={20} style={{margin: 5}}/>
            <FontAwesome name='twitter-square' color='white' size={20} style={{margin: 5}}/>
            <FontAwesome name='linkedin-square' color='white' size={20} style={{margin: 5}}/>
          </View>
        </View>
    );
  }
}

