import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import AwesomeButton from 'react-native-really-awesome-button';
import { FontAwesome } from '@expo/vector-icons';

import Toast from 'react-native-root-toast';
// import config from '../../../config/city_of_taguig'
import config from '../../../config/public_service_department'



var t = require('tcomb-form-native');

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 10,
    padding: 20,
  },
  header: {
    alignItems: 'center',
    padding: 15
  },

  topText: {
  	textAlign: 'center',
  	color: 'black',
    fontFamily: 'sans-serif-light',
    fontSize: 15
  },

  label: {
    textAlign: 'center',
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Roboto'
  }
});

const Booking = t.struct({
  Condition: t.String,              
  Date: t.Date,               
});

const effectiveDate = {
            label: config.UI.map_screen.form.secondqn,
            mode:'datetime',
            config:{
                dialogMode: 'spinner',
                defaultValueText: 'Set date/time here'
            }
        };

const effectiveCondition = {
  label: config.UI.map_screen.form.firstqn
}

const options = {
    fields: {
               "Condition": effectiveCondition,
               "Date": effectiveDate
            }
}

export default class Appointment extends React.Component {

  static navigationOptions = {
    title: config.UI.home.leftbutton.text +  '-' + config.UI.map_screen.button,
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
    this.state = {
      visible: false
    }
  }

  submitForm = () => {
    const { navigation } = this.props;
    const onSubmit = navigation.getParam('onSubmit', null)
    const title = navigation.getParam('title', null)

    var value = this.refs.form.getValue();
    if (value) {
      console.log(value);
    }

    console.log(value.Condition)
    onSubmit(value, title)
  }

  render() {

    let Form = t.form.Form;
    const { navigation } = this.props;
    const title = navigation.getParam('title', null)
    

    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <FontAwesome name={config.UI.map_screen.form.logo} size={65} color="black"/>
          <Text style={styles.label}>{title}</Text>
          <Text style={styles.topText}>{config.UI.map_screen.form.info}</Text>
        </View>

        <Form
          ref="form"
          type={Booking}
          options={options}
        />

        <AwesomeButton
            backgroundColor="#3F3B3B"
            height={50}
            onPress={this.submitForm}
        >
          {config.UI.map_screen.form.button}
        </AwesomeButton>
      </View>
    );
  }
}

