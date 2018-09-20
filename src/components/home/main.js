import React from 'react';
import { Platform, StyleSheet, Text, View, Button, ImageBackground } from 'react-native';

import { createStackNavigator } from 'react-navigation';

import Card from './card'
import Services from './services'
import Updates from './updates'
import Appointment from './medical/appointment'

import Medical from './medical/main'
import Event from './events/main'
import Profile from '../profile/main'

import { Constants, Location, Permissions } from 'expo';

import { fetchHospitals, fetchAddress } from '../../action/hospital'
import { fetchProfile, bookAppointment, registerEvent } from '../../action/profile'
import { fetchNews } from '../../action/news'
import { connect } from 'react-redux'

import Toast from 'react-native-root-toast';

// import config from '../../config/city_of_taguig'
import config from '../../config/public_service_department'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
  },
  header: {
  	padding: 15,
  },
  title: {
  	textAlign: 'center',
  	color: 'white',
    fontFamily: 'Roboto'
  }
});


class Menu extends React.Component {

  static navigationOptions = {
    title: config.UI.home.navbar,
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
      location: null,
      errorMessage: null,
      visible: false,
      message: ''
    };
  }

  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
      this.props.dispatch(fetchNews())
      this.props.dispatch(fetchProfile(2))
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });

    let loc = location.coords.latitude + ", " + location.coords.longitude
    this.props.dispatch(fetchHospitals(loc))
    this.props.dispatch(fetchAddress(loc))
  };

  onSubmit = (value, title) => {
    console.log(value)
    this.props.dispatch(bookAppointment(value, title, 2))
    this.confirmationMsg("Your transaction was succesful! Check back here for updates.")
  }

  confirmationMsg = (msg) => {
    this.props.navigation.navigate('Home')

    this.setState({
            visible: true,
            message: msg
    }); // show toast 

    setTimeout(() => this.setState({
            visible: false,
            message: ''
    }), 5000); // hide toast after 5s
  }

  onClickLayout = (title) => {
    this.props.navigation.navigate('Appointment', {title: title, onSubmit: this.onSubmit})
  } 

  onClickMedical = () => {
    if (this.state.location) {
      this.props.navigation.navigate('Medical', {latitude: this.state.location.coords.latitude, longitude: this.state.location.coords.longitude, nearby: this.props.hospital, onClickLayout: this.onClickLayout})
    }
  }

  onClickEvents = () => {
    this.props.navigation.navigate('Event', {onRegisterEvent: this.onRegisterEvent})
  }

  onClickRefresh = () => {
    this.props.dispatch(fetchNews())
  }

  onRegisterEvent = (program) => {
    console.log(program)
    this.props.dispatch(registerEvent(program, 2))
    this.confirmationMsg("You have successfully registered for the event! Check out the profile page to get the QR code to record you attendance on that day.")
  }

  render() {
    const {address, news, user} = this.props;

    return (
      <ImageBackground source={require('../../assets/images/Background2.png')} style={styles.container}>

        <View>
        <Toast
            visible={this.state.visible}
            position={50}
            shadow={false}
            animation={false}
            hideOnPress={true}
        >{this.state.message}</Toast>
        </View>


        <Card
          user={user}
          address={address}
        />

        <Services
          onClickMedical={this.onClickMedical}
          onClickEvents={this.onClickEvents}
        />

        {news &&
        <Updates
          news={news}
          onClickRefresh={this.onClickRefresh}
        />}

      </ImageBackground>
    );
  }
}

function mapStateToProps(state) {
  return { hospital: state.hospital.data, error: state.hospital.error, address: state.hospital.address, news: state.news.data, user: state.user.data };
}

const MenuContainer = connect(mapStateToProps)(Menu)

export default createStackNavigator(
	{
		Home: MenuContainer,
		Medical: Medical,
    Appointment: Appointment,
    Event: Event
	}
)