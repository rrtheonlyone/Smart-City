import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { Dialog, DialogDefaultActions } from 'react-native-material-ui';

import Map from './map.js'

// import config from '../../../config/city_of_taguig'
import config from '../../../config/public_service_department'


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
  dialog: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  header: {
    fontSize: 20
  }
});




export default class Medical extends React.Component {

  static navigationOptions = {
    title: config.UI.home.leftbutton.text,
    headerStyle: {
      backgroundColor: '#2d4059',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  
  constructor(props) {
      super(props);
  }



  componentDidMount() {
    Alert.alert(
      config.UI.map_screen.alert.title,
      config.UI.map_screen.alert.message,
      [
        {text: 'Ok Understood', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
  }

  render() {
    const { navigation } = this.props;
    const latitude = navigation.getParam('latitude', null)
    const longitude = navigation.getParam('longitude', null)
    const nearby = navigation.getParam('nearby', null)
    const onClickLayout = navigation.getParam('onClickLayout', null)


    return (
      <View style={styles.container}>
          {latitude && longitude && nearby &&
            <Map
              latitude={latitude}
              longitude={longitude}
              nearby={nearby}
              onClickLayout={onClickLayout}
            />
          }
      </View>
    );
  }
}

