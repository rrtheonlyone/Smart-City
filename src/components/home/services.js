import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { FontAwesome } from '@expo/vector-icons'; 

import AwesomeButton from 'react-native-really-awesome-button';
import { Button } from 'react-native-material-ui';

// import config from '../../config/city_of_taguig'
import config from '../../config/public_service_department'


const styles = StyleSheet.create({
  
  panel: {
    flexDirection: 'row',
    padding: 30
  },

  button: {
    margin: 8,
    backgroundColor: '#220066',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 300
  },

  text: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
    marginTop: 5,
    fontFamily: 'Roboto'
  },

  wrapper: {
    margin: 8
  }
  
});


export default class Services extends React.Component {


  render() {

    const {onClickMedical, onClickEvents} = this.props;

    return (
      <View style={styles.panel}>
        <View style={styles.wrapper}>
          <AwesomeButton
            backgroundColor="#EA5455"
            width={120}
            height={80}
            onPress={onClickMedical}
          >
            <FontAwesome name={config.UI.home.leftbutton.logo} size={30} color="white"/>
            
          </AwesomeButton>
          <Text style={styles.text}>{config.UI.home.leftbutton.text}</Text>
        </View>

        <View style={styles.wrapper}>
          <AwesomeButton
            backgroundColor="#005874"
            width={120}
            height={80}
            onPress={onClickEvents}
          >
            <FontAwesome name={config.UI.home.rightbutton.logo} size={30} color="white"/>
            
          </AwesomeButton>
          <Text style={styles.text}>{config.UI.home.rightbutton.text}</Text>
        </View>

      </View>
    );
  }
}