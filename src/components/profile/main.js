import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import UserDetails from './details'
import History from './history'
import { FontAwesome } from '@expo/vector-icons'; 

import { createStackNavigator } from 'react-navigation';

import { fetchProfile, fetchHistory } from '../../action/profile'
import { connect } from 'react-redux'

import QRCodeGenerator from './qrcode/main'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    flexDirection: 'row',
    margin: 5,
    padding: 15
  },

  headerText: {
    marginLeft: 5,
    fontWeight: 'bold',
    fontSize: 25,
    fontFamily: 'Roboto'
  }
});


class Profile extends React.Component {

  static navigationOptions = {
    title: 'Profile',
    headerStyle: {
      backgroundColor: '#2d4059',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.dispatch(fetchProfile(2))
    this.props.dispatch(fetchHistory(2))
  }

  onClickRefresh = () => {
    this.props.dispatch(fetchHistory(2))
  }

  onClickCard = (service) => {

    service = service.replace(/\s/g, '')
    let code = 'https://presalesdigitallabg85556318.jp1.hana.ondemand.com/SmartCity/register_program.html?eventName=' + service

    console.log(code)

    this.props.navigation.navigate('QRCode', {url: code})
  }

  render() {

    const {user, history} = this.props;

    return (
      <ImageBackground source={require('../../assets/images/Background2.png')} style={styles.container}>
        
        {user &&
        <UserDetails
          user={user[0]}
        />}

        {history &&
        <History
          history={history}
          onClickRefresh={this.onClickRefresh}
          onClickCard={this.onClickCard}
        />}

      </ImageBackground>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.user.data, history: state.user.history };
}

const ProfileContainer = connect(mapStateToProps)(Profile)

export default createStackNavigator(
  {
    Profile: ProfileContainer,
    QRCode: QRCodeGenerator
  }
)