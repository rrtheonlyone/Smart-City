import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';

import { createStackNavigator } from 'react-navigation';

import CurrentFriends from './current'
import FriendsInfo from './info'

import { fetchProfile } from '../../action/profile'
import { connect } from 'react-redux'

const styles = StyleSheet.create({
  container: {
    flex: 1
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


class Friends extends React.Component {

  static navigationOptions = {
    title: 'Friends',
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
  }

  render() {

    const {user} = this.props

    return (
      <ImageBackground source={require('../../assets/images/Background2.png')} style={styles.container}>

        <FriendsInfo/>

        {user &&
        <CurrentFriends
          friends={user[0].FRIENDS}
        />}
        
      </ImageBackground>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.user.data };
}

const FriendsContainer = connect(mapStateToProps)(Friends)

export default createStackNavigator(
  {
    Friends: FriendsContainer
  }
)