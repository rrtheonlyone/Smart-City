import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';

import { Card } from 'react-native-material-ui'; 
import { FontAwesome } from '@expo/vector-icons';
import Carousel from 'react-native-snap-carousel';
import {RkCard, rkCardHeader, rkCardImg, rkCardContent, rkCardFooter, RkTheme, RkButton} from 'react-native-ui-kitten';
import * as Progress from 'react-native-progress';

const horizontalMargin = 20;
const slideWidth = 220;

const sliderWidth = Dimensions.get('window').width;
const itemWidth = slideWidth + horizontalMargin * 2;
const itemHeight = 400;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  slide: {
    width: itemWidth,
    backgroundColor: '#FAFAFA',
    marginTop: 10
  },
  cardHeader: {
    marginLeft: 5,
    fontSize: 20,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: 'black'
  },
  
  status: {
    textAlign: 'center',
    fontFamily: 'sans-serif-light',
    fontSize: 16,
    padding: 10,
    color: 'black'
  },

  detail: {
    textAlign: 'center',
    fontFamily: 'sans-serif-light',
    fontSize: 14,
    fontStyle: 'italic',
    color: 'black'
  },

  lowerPanel: {
    margin: 5,
    padding: 5,
    alignItems: 'center'
  }
});

RkTheme.setType('RkCard', 'story', {
  header: {
    alignSelf: 'center',
    flexDirection: 'row'
  },
  content:{
    alignSelf:'center'
  },
  footer: {
    alignSelf: 'center'
  }
});

export default class CurrentFriends extends React.Component {
  
  _renderItem ({item, index}) {
    return (
        <RkCard style={styles.slide} rkType='story'>
          <View rkCardHeader>
            <FontAwesome name='user-circle-o' color='black' size={30}/>
            <Text style={styles.cardHeader}>{item.NAME}</Text>
          </View>

          <View rkCardContent>
            <Text style={styles.status}>Status: FRIENDS</Text>
            <Text style={styles.detail}>Engaged in 3 Activites Together</Text>
            <Text style={styles.detail}>Same Neighbourhood</Text>

            <View style={styles.lowerPanel}>
              <Text style={{padding: 3, fontSize: 12, fontFamily: 'Roboto', fontWeight: 'bold', color: 'black'}}>Friendship Status</Text>
              <Progress.Bar progress={0.3} width={200} color="black" borderColor="black" />
            </View>
          </View>

          <View rkCardFooter>
            <RkButton rkType='primary small' style={{backgroundColor: '#84A59D', margin: 5, padding: 5}}>
              <FontAwesome name='info-circle' color='white' size={30}/>
            </RkButton>
            <RkButton rkType='primary small' style={{backgroundColor: '#2F4550', margin: 5, padding: 5}}>
              <FontAwesome name='comments-o' color='white' size={30}/>
            </RkButton>
          </View>

        </RkCard>
    );
  }

  render() {

    const {friends} = this.props

    return (
	     <View style={styles.container}> 
          <Carousel
              ref={(c) => { this._carousel = c; }}
              data={friends}
              renderItem={this._renderItem}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
              layout={'stack'} 
              layoutCardOffset={18}
          />
       </View>
    );
  }
}

