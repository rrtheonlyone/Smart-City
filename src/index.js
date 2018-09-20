import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Icons
import { Ionicons } from '@expo/vector-icons'; 

//The screens in tab
import Profile from './components/profile/main'
import Friends from './components/friends/main'
import HomeScreen from './components/home/main'
import Enquiry from './components/enquiry/main'

import Appointment from './components/home/medical/appointment'

import { createBottomTabNavigator } from 'react-navigation';


const Navigator = createBottomTabNavigator(
  {
    Home: { screen: HomeScreen },
    Friends: { screen: Friends },
    Profile: { screen: Profile },
    Enquiry: { screen: Enquiry },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;

        if (routeName === 'Home') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        } else if (routeName === 'Enquiry') {
          iconName = `ios-chatbubbles${focused ? '' : '-outline'}`;
        } else if (routeName === 'Friends') {
          iconName = `ios-contacts${focused ? '' : '-outline'}`;
        } else if (routeName === "Profile") {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    animationEnabled: false,
    swipeEnabled: false,
  }
);

export default Navigator;


