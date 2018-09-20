import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { MapView } from "expo";
import { FontAwesome } from '@expo/vector-icons';

// import config from '../../../config/city_of_taguig'
import config from '../../../config/public_service_department'


const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  callout: {
    padding: 5,
    alignItems: 'center'
  },

  title: {
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: 'Roboto',
    padding: 5
  },

  info: {
    padding: 5,
    color: 'blue'
  },

  courses: {
    padding: 3
  },

  courseText: {
    textAlign: 'center',
    fontFamily: 'sans-serif-light'
  },

  card: {
    flexDirection: 'row'
  },

  friends: {
    margin: 5
  }
});

var courses = [
  "Programming",
  "Pottery",
  "Art and Craft",
  "Singing",
  "Dance",
  "Public Speaking",
  "Career Guidance",
  "Data Analytics Introduction",
  "UI Design Fundamentals",
  "Market Principls",
  "Investing 101",
  "Cybersecurity",
  "Film Making",
  "Basic Mobile Application Design",
  "Implications of Blockchain",
  "Design Thinking"
]


export default class Map extends React.Component {


  moveScreen(title) {
    const {onClickLayout} = this.props;
    onClickLayout(title)
  }

  render() {
    const {latitude, longitude, nearby, onClickLayout } = this.props;

    return (
        <MapView
          style={styles.container}
          initialRegion={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        >

          {nearby && nearby.results &&
            nearby.results.map((data, index) => 
            {
              const coords = {
                 latitude: data.geometry.location.lat,
                 longitude: data.geometry.location.lng,
              };

              let numFriends = Math.round(Math.random() * 20) + 1
              let courseIndex = Math.round(Math.random() * 15)
              let dc = Math.round(Math.random() * 3)

              return (
               <MapView.Marker
                  key={index}
                  coordinate={coords}
                  title={data.name}
               >
                <MapView.Callout style={styles.callout} onPress={() => this.moveScreen(data.name)}>

                  <Text style={styles.title}>{data.name}</Text>

                  <View style={styles.card}>
                    <FontAwesome name="child" size={20} color="#200947"/>
                    <Text style={styles.friends}>{numFriends} friends have been here</Text>
                  </View>

                  <View style={styles.courses}>
                    <Text style={styles.courseText}>Courses Available:</Text>
                    <Text style={styles.courseText}>{courses[courseIndex]}</Text>
                    <Text style={styles.courseText}>{courses[(courseIndex + dc) % 15]}</Text>
                  </View>
                  
                  <View style={{padding: 5}}>
                    <Button title={config.UI.map_screen.button} color="#00b8a9" onPress={() => {}} />
                  </View>

                </MapView.Callout>
               </MapView.Marker>
              )

            })
          }

        </MapView>
    );
  }
}

