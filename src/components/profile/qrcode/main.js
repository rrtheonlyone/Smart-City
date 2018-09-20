import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';

import QRCode from 'react-native-qrcode';

// import config from '../../../config/city_of_taguig'
import config from '../../../config/public_service_department'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  header: {
    textAlign: 'center',
  	padding: 15,
    fontSize: 20,
    fontFamily: 'sans-serif-light'
  },
  title: {
  	textAlign: 'center',
  	color: 'white',
  }
});

export default class QRCodeGenerator extends React.Component {

  static navigationOptions = {
    title: config.UI.qr_code.title,
    headerStyle: {
      backgroundColor: '#2d4059',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {

    const { navigation } = this.props;
    const code = navigation.getParam('url', null)

    return (
	      <View style={styles.container}>

          <Text style={styles.header}>Use the QR code to register your attendance for the event</Text>

          <QRCode
            value={code}
            size={300}
            bgColor='black'
            fgColor='white'/>

        </View>
    );
  }
}

