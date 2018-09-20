import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableHighlight, TouchableOpacity} from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { Card } from 'react-native-material-ui'; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10
  },

  title: {
  	textAlign: 'center',
  	color: 'black',
    fontFamily: 'Roboto',
    fontSize: 20,
    marginLeft: 5
  },

  cardHeader: {
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5
  },

  card: {
    fontFamily: 'Roboto',
    marginLeft: 5,
    fontSize: 15,
    fontWeight: 'bold'
  },

  condition: {
    fontFamily: 'sans-serif-light',
    padding: 5
  },

  footer: {
    alignSelf: 'flex-end',
    flexDirection: 'row'
  },

  time: {
    fontFamily: 'sans-serif-light',
    margin: 3,
    fontStyle: 'italic'
  },

  touch: {
    marginLeft: 30
  }

});

export default class History extends React.Component {
  render() {
    
    const {history, onClickRefresh, onClickCard} = this.props

    return (
	     <View style={styles.container}>
          <View style={{flexDirection: 'row'}}>
            <FontAwesome name='calendar' color='black' size={25}/>
            <Text style={styles.title}>Appointments</Text>

            <TouchableOpacity style={styles.touch} onPress={onClickRefresh}>
                <FontAwesome name='refresh' color='grey' size={20}/>
            </TouchableOpacity>
          </View>

          <ScrollView style={{margin: 10}}>

            {history.map((data, index) => {

              // let numDate = Math.round(Math.random() * 20) + 1
              let numDate = 18

              if (data.Category == "Event") {
                return (
                  <TouchableOpacity key={index} onPress={() => onClickCard(data.NAME)}>
                    <Card style={{container: {padding: 10, width: 600}}}>
                      <View style={styles.cardHeader}>
                        <FontAwesome name='balance-scale' color='black' size={15}/>
                        <Text style={styles.card}>{data.NAME}</Text>
                      </View>

                      <Text style={styles.time}>Registered on {numDate} July 2018</Text>
                    </Card>
                  </TouchableOpacity>
                )
              } else {
                  return (
                    <Card key={index} style={{container: {padding: 10, width: 600}}}>
                      <View style={styles.cardHeader}>
                        <FontAwesome name='medkit' color='black' size={15}/>
                        <Text style={styles.card}>{data.BRANCH}</Text>
                      </View>

                      <Text style={styles.condiiton}>Condition: {data.REMARKS}</Text>
                      <Text style={styles.time}>Registered on {data.TIMESTAMP}</Text>
                    </Card>  
                  )
              }
            })}

          </ScrollView>
       </View>
    );
  }
}

