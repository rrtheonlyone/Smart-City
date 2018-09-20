import React from 'react';
import { StyleSheet, Text, View, Image, Alert, Dimensions, ImageBackground } from 'react-native';

import Carousel from 'react-native-snap-carousel';
import {RkCard, rkCardHeader, rkCardImg, rkCardContent, rkCardFooter, RkTheme, RkButton} from 'react-native-ui-kitten';

import {fetchEvents} from '../../../action/events'
import {registerEvent} from '../../../action/profile'
import { connect } from 'react-redux'

// import config from '../../../config/city_of_taguig'
import config from '../../../config/public_service_department'


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
    marginTop: 40
  },

  slideInnerContainer: {
    width: slideWidth,
    flex: 1    
  }, 

  cardHeader: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#444f5a'
  },

  cardContent: {
    fontFamily: 'sans-serif-light',
    textAlign: 'center'
  }
});

RkTheme.setType('RkCard', 'story', {
  img: {
    height: 250,
    opacity: 0.7
  },
  header: {
    alignSelf: 'center',
  },
  content:{
    alignSelf:'center'
  },
  footer: {
    alignSelf: 'center'
  }
});

class Event extends React.Component {

  static navigationOptions = {
    title: config.UI.home.rightbutton.text,
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

      this._renderItem.bind(this)
  }

  componentWillMount() {
    this.props.dispatch(fetchEvents())
  }

  _renderItem ({item, index}) {

    const { navigation } = this.props;
    const onRegisterEvent = navigation.getParam('onRegisterEvent', null)


    return (
        <RkCard style={styles.slide} rkType='story'>
          <Image rkCardImg source={{uri: item.PHOTO}}/>
          <View rkCardHeader>
            <Text style={styles.cardHeader}>{item.NAME}</Text>
          </View>
          <View rkCardContent>
            <Text style={styles.cardContent}>{item.DESC}</Text>
          </View>
          <View rkCardFooter>
            <RkButton rkType='primary rounded small' style={{backgroundColor: '#444f5a'}} onPress={() => onRegisterEvent(item.ID)}>
              Register
            </RkButton>
          </View>
        </RkCard>
    );
  }

  render() {
    const { navigation, programs } = this.props;
    const resizeMode = 'center';

    return (
      <ImageBackground source={require('../../../assets/images/Background2.png')} style={styles.container}>
            {programs && 
            <Carousel
              ref={(c) => { this._carousel = c; }}
              data={programs}
              renderItem={this._renderItem.bind(this)}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
            />}
      </ImageBackground>
    );
  }
}

function mapStateToProps(state) {
  return { programs: state.programs.data };
}

export default connect(mapStateToProps)(Event)

