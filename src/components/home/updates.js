import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

import { FontAwesome, MaterialIcons } from '@expo/vector-icons'; 
import { Card } from 'react-native-material-ui';

import { Button } from 'react-native-material-ui'

import moment from 'moment'

const styles = StyleSheet.create({
  panel: {
    flex: 1,
    alignItems: 'center',
  },

  headerBox: {
    flexDirection: 'row',
    padding: 5,
  },

  header: {
    fontSize: 16,
    marginLeft: 5,
    marginRight: 8,
    fontWeight: 'bold',
    fontFamily: 'Roboto'
  },

  footer: {
    alignSelf: 'flex-end',
    flexDirection: 'row'
  },

  card: {
    fontFamily: 'sans-serif-light',
    margin: 5
  },

  time: {
    fontFamily: 'sans-serif-light',
    margin: 3,
    fontStyle: 'italic'
  },

  touch: {
    marginLeft: 10,

  }
});


export default class Updates extends React.Component {

  render() {
    const {news, onClickRefresh} = this.props

    return (
      <View style={styles.panel}>

        <View style={styles.headerBox}>
          <FontAwesome name='newspaper-o' color='black' size={25}/>
          <Text style={styles.header}>Important Updates</Text>

          <TouchableOpacity style={styles.touch} onPress={onClickRefresh}>
            <FontAwesome name='refresh' color='grey' size={20}/>
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.scrollPanel}>

          {news.map((data, index) => 
            <Card key={index} style={{container: {width: 300}}}>
              <Text style={styles.card}>{data.NAME}</Text>

              <View style={styles.footer}>
                <MaterialIcons name="timer" size={20} color="black"/>
                <Text style={styles.time}>{moment(data.TIMESTAMP).fromNow()}</Text>
              </View>
            </Card>
          )}

        </ScrollView>

      </View>
    );
  }
}

