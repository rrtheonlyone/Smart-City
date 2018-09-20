import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';

import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'; 
import {RkTextInput} from 'react-native-ui-kitten';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  panel: {
    flexDirection: 'row',
    padding: 15,
    marginTop: 5
  },
  header: {
    marginLeft: 5,
    fontSize: 25,
    fontFamily: 'Roboto',
    fontWeight: 'bold'
  },
  help: {
  	textAlign: 'center',
  	fontFamily: 'sans-serif-light',
    margin: 10,
    fontSize: 16
  }
});

export default class FriendsInfo extends React.Component {
  render() {
    return (
	     <View style={styles.container}>

          <View style={styles.panel}>
            <MaterialCommunityIcons name='cards' color='black' size={30}/>
            <Text style={styles.header}>Connections: 3</Text>
          </View>

          <Text style={styles.help}>
            Search through the recommended stack below and add more friends into your connections!
          </Text>    

           <RkTextInput 
            label={<Ionicons name='ios-search' size={25} style={{padding: 10, color:'black'}}/>} 
            style={{width: 300, backgroundColor: '#FAFAFA'}}
            inputStyle={{color: 'white'}}
            />
       </View>
    );
  }
}

